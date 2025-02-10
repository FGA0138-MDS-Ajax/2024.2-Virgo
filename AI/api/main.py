from fastapi import FastAPI,File, UploadFile,Form
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import mlflow
import time
import tensorflow as tf 
from PIL import Image
import numpy as np
import io


# the translator should be used as such ->
# get file -> open as image -> send to model;
# model -> should return prediction as a probability distribution -> get the max = index (z = prediction.index(max(prediction)))
# pair_plant_label = le_translator[z], where z is the maximum index in the prediction.

# this is precisely the routine of using the loaded model, as long as it attends THIS translator labels.

# changing the labels means changing the model architecture, meaning retraining a model for the new labels.
# therefore, avoid doing translator changing operations :)

le_translator = {0: 'Alface Mildeo', 1: 'Alface Murcha Queima', 2: 'Alface_oidio', 3: 'Alface Podridao Basal',
                4: 'Alface_queima_das_bordas', 5: 'Alface_saudavel', 6: 'Alface_septoria', 7: 'alho_botrytis',
                8: 'alho_ferrugem', 9: 'Alho Mancha Purpura', 10: 'Alho mancha_stemphylium', 11: 'Alho Mildio',
                12: 'Alho xanthomonas', 13: 'Banana cordana', 14: 'Banana Mal do Panama', 15: 'Banana Moko',
                16: 'Banana Mosaico das bracteas', 17: 'Banana Pestalotiopsis', 18: 'Banana Praga dos Insetos',
                19: 'Banana Saudavel', 20: 'Banana Sigatoka Amarela', 21: 'Banana Sigatoka Fungo',
                22: 'Banana_sigatoka_preta', 23: 'Goiaba Antracnose', 24: 'Goiaba cancro_pestalotiopsis',
                25: 'Goiaba Crosta', 26: 'Goiaba_ferrugem', 27: 'Goiaba Ferrugem Vermelha', 28: 'Goiaba Mumificacao',
                29: 'Goiaba Phytophthora', 30: 'Goiaba saudavel', 31: 'Goiaba `stylar end rot`',
                32: 'Laranja Buraco de Tiro', 33: 'Laranja Cancro Citrico', 34: 'Laranja_clorose',
                35: 'Laranja Cochonilhas', 36: 'Laranja Hlb', 37: 'Laranja Morte Reg', 38: 'Laranja Mosca Branca',
                39: 'Laranja Oidio', 40: 'Laranja Saudavel', 41: 'Mandioca Queima Folhas',
                42: 'Mandioca_acaro', 43: 'Mandioca Antracnose', 44: 'Mandioca Bacteriose', 45: 'Mandioca Mancha Branca',
                46: 'Mandioca Mancha Parda', 47: 'Mandioca Mosaico Comum', 48: 'Mandioca Mosaico Nervuras',
                49: 'Mandioca Mosca Galhas', 50: 'Mandioca Oidio', 51: 'Mandioca Podridao', 52: 'Mandioca Saudavel',
                53: 'Milho Mancha_cinza_foliar', 54: 'Milho Mancha Comum Ferrugem', 55: 'Milho Mancha Foliar Norte',
                56: 'milho Mancha Marrom', 57: 'Milho Mildeo', 58: 'Milho Saudavel', 59: 'Morango Folha Queimada',
                60: 'Morango Mancha Angular da Folha', 61: 'Morango Mancha Foliar', 62: 'Morango Mofo Cinza',
                63: 'Morango Oidio', 64: 'Morango Podridao Antracnose', 65: 'Morango Praga das Flores',
                66: 'Morango Saudavel', 67: 'Soja Crestamento', 68: 'Soja_ferrugem', 69: 'Soja Mancha Bacteriana',
                70: 'Soja Mancha Parda', 71: 'Soja Mildio', 72: 'Soja Mosaico Amarelo', 73: 'Soja Murcha do Sul',
                74: 'Soja Saudavel', 75: 'Soja Septoria', 76: 'Soja Sindrome Morte Subita', 77: 'Soja Virus Mosaico',
                78: 'Tomate Acaro Aranha', 79: 'Tomate Enrolamento Amarelo', 80: 'Tomate Mancha Alvo', 81: 'Tomate Mancha Bacteriana',
                82: 'Tomate Mancha Foliar Septoria', 83: 'Tomate Mofo Folha', 84: 'Tomate Mosaico', 85: 'Tomate Requeima Precoce',
                86: 'Tomate Requeima Tardia', 87: 'Tomate Saudavel'}

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
        prediction_array = prediction[0]  # Pega o primeiro elemento pois é um batch de 1
        golden_index = np.argmax(prediction_array)  # Usa np.argmax para maior precisão
        confidence = float(prediction_array[golden_index])  # Pega o valor de confiança
        plant_disease = le_translator[golden_index]
        return {
            "filename": file.filename,
            "prediction": plant_disease,
            #"confidence": confidence,  # Adiciona o valor de confiança na resposta
            #"predicted_index": int(golden_index),  # Adiciona o índice para debug
            #"latency": latency
        }


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=3002)