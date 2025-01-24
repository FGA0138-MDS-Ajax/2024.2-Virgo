from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import mlflow
import time

app = FastAPI()

origins = [
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def predict(
    file: UploadFile = File(...)
):
    with mlflow.start_run():
        start_time = time.time()

        end_time = time.time()
        latency = end_time - start_time

        # Registra métricas e logs no MLflow
        #mlflow.log_metric("confidence", confidence)
        mlflow.log_metric("latency", latency) # Tempo de previsão

        #probabilidade = int(float(confidence)*100)

        return {
            file #retirar dps só para testes
            #'Doença': predicted_class,
            #'Probabilidade': f"{probabilidade}%"
        }


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=3002)