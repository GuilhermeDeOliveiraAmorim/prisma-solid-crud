/*
  Warnings:

  - You are about to drop the `address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "address";

-- CreateTable
CREATE TABLE "adresses" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,

    CONSTRAINT "adresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_adresses" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_address" TEXT NOT NULL,

    CONSTRAINT "users_adresses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_adresses" ADD CONSTRAINT "users_adresses_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_adresses" ADD CONSTRAINT "users_adresses_id_address_fkey" FOREIGN KEY ("id_address") REFERENCES "adresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
