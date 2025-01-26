from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import mlflow
import time
from PIL import Image

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

@app.post("/upload")
async def predict(
    file: UploadFile
):
    with mlflow.start_run():

        # TODO -> run some function to verify if the sender IS the backend AND
        #    if the file sent IS a jpeg of some sort. any sort.
        # 
        start_time = time.time()

        # basic testing routine. If it works, 
        # it should print the file structure 
        # and stuff to console
        jpeg       = Image.open(file)
        jpeg       = jpeg.resize([256, 256]) #easy as.
        end_time   = time.time()
        latency    = end_time - start_time

        # Registra métricas e logs no MLflow
        #mlflow.log_metric("confidence", confidence)
        mlflow.log_metric("latency", latency) # Tempo de previsão
        #probabilidade = int(float(confidence)*100)

        contents = await file.read()
        with open(f"./imagens/{file.filename}", "wb") as f:
            f.write(contents)


        #o arquivo tá sendo recebido corretamente? medo pois no terminal diz OK p mim
        return {
            #retirar dps só para testes
            #'Doença': predicted_class,
            #'Probabilidade': f"{probabilidade}%"
            "filename": file.filename
        }


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=3002)