from fastapi import FastAPI,File, UploadFile,Form
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import mlflow
import time
import tensorflow as tf 
from PIL import Image
import numpy as np

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

        #opens and resizes file.
        jpeg       = Image.open(file)
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

        contents = await file.read()
        with open(f"./imagens/{file.filename}", "wb") as f:
            f.write(contents)
        
        print("\n")
        print("ARQUIVO:::: \n")
        print(file)
        print(f"Tipo de planta: {plant_type}")
        #o arquivo tá sendo recebido corretamente? medo pois no terminal diz OK p mim
        return {
            #retirar dps só para testes
            #'Doença': predicted_class,
            #'Probabilidade': f"{probabilidade}%"
            file.filename
        }


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=3002)