/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Agronomo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[crea]` on the table `Agronomo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Agronomo_cpf_key" ON "Agronomo"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Agronomo_crea_key" ON "Agronomo"("crea");
