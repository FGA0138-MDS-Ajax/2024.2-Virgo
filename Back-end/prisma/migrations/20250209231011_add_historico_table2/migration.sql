-- CreateTable
CREATE TABLE "Historico" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "foto" TEXT NOT NULL,

    CONSTRAINT "Historico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Historico_id_key" ON "Historico"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Historico_userId_key" ON "Historico"("userId");

-- AddForeignKey
ALTER TABLE "Historico" ADD CONSTRAINT "Historico_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
