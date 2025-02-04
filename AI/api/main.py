from fastapi import FastAPI,File, UploadFile,Form
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import mlflow
import time
import tensorflow as tf 
from PIL import Image
import numpy as np
import io

le_translator = {0: 'alface_mildeo', 1: 'alface_murcha_queima', 2: 'alface_oidio', 3: 'alface_podridao_basal',
                4: 'alface_queima_das_bordas', 5: 'alface_saudavel', 6: 'alface_septoria', 7: 'alho_botrytis',
                8: 'alho_ferrugem', 9: 'alho_mancha_purpura', 10: 'alho_mancha_stemphylium', 11: 'alho_mildio',
                12: 'alho_xanthomonas', 13: 'banana_cordana', 14: 'banana_mal_do_panama', 15: 'banana_moko',
                16: 'banana_mosaico_das_bracteas', 17: 'banana_pestalotiopsis', 18: 'banana_praga_dos_insetos',
                19: 'banana_saudavel', 20: 'banana_sigatoka_amarela', 21: 'banana_sigatoka_fungo',
                22: 'banana_sigatoka_preta', 23: 'goiaba_antracnose', 24: 'goiaba_cancro_pestalotiopsis',
                25: 'goiaba_crosta', 26: 'goiaba_ferrugem', 27: 'goiaba_ferrugem_vermelha', 28: 'goiaba_mumificacao',
                29: 'goiaba_phytophthora', 30: 'goiaba_saudavel', 31: 'goiaba_stylar_end_rot',
                32: 'laranja_buraco_de_tiro', 33: 'laranja_cancro_citrico', 34: 'laranja_clorose',
                35: 'laranja_cochonilhas', 36: 'laranja_hlb', 37: 'laranja_morte_reg', 38: 'laranja_mosca_branca',
                39: 'laranja_oidio', 40: 'laranja_saudavel', 41: 'mandioca queima folhas- imagem colorida e com fundo',
                42: 'mandioca_acaro', 43: 'mandioca_antracnose', 44: 'mandioca_bacteriose', 45: 'mandioca_mancha_branca',
                46: 'mandioca_mancha_parda', 47: 'mandioca_mosaico_comum', 48: 'mandioca_mosaico_nervuras',
                49: 'mandioca_mosca_galhas', 50: 'mandioca_oidio', 51: 'mandioca_podridao', 52: 'mandioca_saudavel',
                53: 'milho_mancha_cinza_foliar', 54: 'milho_mancha_comum_ferrugem', 55: 'milho_mancha_foliar_norte',
                56: 'milho_mancha_marrom', 57: 'milho_mildeo', 58: 'milho_saudavel', 59: 'morango_folha_queimada',
                60: 'morango_mancha_angular_da_folha', 61: 'morango_mancha_foliar', 62: 'morango_mofo_cinza',
                63: 'morango_oidio', 64: 'morango_podridao_antracnose', 65: 'morango_praga_das_flores',
                66: 'morango_saudavel', 67: 'soja_crestamento', 68: 'soja_ferrugem', 69: 'soja_mancha_bacteriana',
                70: 'soja_mancha_parda', 71: 'soja_mildio', 72: 'soja_mosaico_amarelo', 73: 'soja_murcha_do_sul',
                74: 'soja_saudavel', 75: 'soja_septoria', 76: 'soja_sindrome_morte_subita', 77: 'soja_virus_mosaico',
                78: 'tomate_acaro_aranha', 79: 'tomate_enrolamento_amarelo', 80: 'tomate_mancha_alvo', 81: 'tomate_mancha_bacteriana',
                82: 'tomate_mancha_foliar_septoria', 83: 'tomate_mofo_folha', 84: 'tomate_mosaico', 85: 'tomate_requeima_precoce',
                86: 'tomate_requeima_tardia', 87: 'tomate_saudavel'}

app = FastAPI()


origins = [
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins     = origins,
    allow_credentials = True,
    allow_methods     = ["*"],
    allow_headers     = ["*"]
)

MODEL = tf.keras.models.load_model('lsx.keras')

@app.post("/upload")
async def predict(
    file: UploadFile = File(...),
    plant_type: str = Form(...)  # Recebe o campo "plant_type" do FormData
):
    # with mlflow.start_run():

        # TODO -> run some function to verify if the sender IS the backend AND
        #    if the file sent IS a jpeg of some sort. any sort.
        # 
        start_time = time.time()

        # basic testing routine. If it works, 
        # it should print the file structure 
        # and stuff to console
        contents = await file.read()
        #opens and resizes file.
        jpeg       = Image.open(io.BytesIO(contents))
        print("ABRIU KKKKKK")
        jpeg       = jpeg.resize((256, 256), Image.Resampling.LANCZOS) #easy as.
        
        #make it an array, fake a batch and normalize values.
        arr        = tf.keras.preprocessing.image.img_to_array(jpeg)
        arr        = np.expand_dims(arr, axis=0)
        arr        = arr / 255.0

        #now arr should hold what we need and we may just, ya know, 

        
        prediction = MODEL.predict(arr, verbose = 2)


        end_time   = time.time()
        latency    = end_time - start_time

        # Registra métricas e logs no MLflow
        #mlflow.log_metric("confidence", confidence)
        # mlflow.log_metric("latency", latency) # Tempo de previsão
        #probabilidade = int(float(confidence)*100)

        # contents = await file.read()
        # with open(f"./imagens/{file.filename}", "wb") as f:
        #     f.write(contents)
        
        # print("\n")
        # print("ARQUIVO:::: \n")
        # print(file)
        # print(f"Tipo de planta: {plant_type}")
        #o arquivo tá sendo recebido corretamente? medo pois no terminal diz OK p mim
        prediction_list = prediction.tolist()
        return {
            "filename": file.filename, "prediction": prediction_list, "latency": latency
        }


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=3002)