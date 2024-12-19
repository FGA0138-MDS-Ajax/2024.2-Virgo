-- DropForeignKey
ALTER TABLE "Agronomo" DROP CONSTRAINT "Agronomo_userId_fkey";

-- AddForeignKey
ALTER TABLE "Agronomo" ADD CONSTRAINT "Agronomo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
