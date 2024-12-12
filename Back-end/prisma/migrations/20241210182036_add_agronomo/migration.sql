-- CreateTable
CREATE TABLE "Agronomo" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "crea" TEXT NOT NULL,

    CONSTRAINT "Agronomo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agronomo_id_key" ON "Agronomo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Agronomo_userId_key" ON "Agronomo"("userId");

-- AddForeignKey
ALTER TABLE "Agronomo" ADD CONSTRAINT "Agronomo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
