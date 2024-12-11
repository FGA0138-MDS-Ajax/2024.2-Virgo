/*
  Warnings:

  - The primary key for the `Agronomo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Agronomo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Agronomo_id_key";

-- AlterTable
ALTER TABLE "Agronomo" DROP CONSTRAINT "Agronomo_pkey",
DROP COLUMN "id";
