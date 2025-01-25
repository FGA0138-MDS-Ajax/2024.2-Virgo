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
    file: UploadFile
):
    with mlflow.start_run():
        start_time = time.time()

        end_time = time.time()
        latency = end_time - start_time

        mlflow.log_metric("latency", latency) 


        contents = await file.read()
        with open(f"./imagens/{file.filename}", "wb") as f:
            f.write(contents)

        return {
            "filename": file.filename,
            "content_type": file.content_type,
            "latency": latency
        }


if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=3002)