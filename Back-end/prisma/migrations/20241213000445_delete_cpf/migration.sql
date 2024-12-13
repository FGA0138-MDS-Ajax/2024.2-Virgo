/*
  Warnings:

  - You are about to drop the column `cpf` on the `Agronomo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Agronomo_cpf_key";

-- AlterTable
ALTER TABLE "Agronomo" DROP COLUMN "cpf";
