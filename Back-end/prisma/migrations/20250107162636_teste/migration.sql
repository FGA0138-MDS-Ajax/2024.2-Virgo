-- CreateEnum
CREATE TYPE "Role" AS ENUM ('AGRICULTOR', 'AGRONOMO');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agronomo" (
    "userId" TEXT NOT NULL,
    "crea" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Agronomo_userId_key" ON "Agronomo"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Agronomo_crea_key" ON "Agronomo"("crea");

-- AddForeignKey
ALTER TABLE "Agronomo" ADD CONSTRAINT "Agronomo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
