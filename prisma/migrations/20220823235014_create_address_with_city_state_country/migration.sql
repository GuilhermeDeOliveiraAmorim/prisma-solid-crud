/*
  Warnings:

  - You are about to drop the column `city` on the `adresses` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `adresses` table. All the data in the column will be lost.
  - Added the required column `id_city` to the `adresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_country` to the `adresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_state` to the `adresses` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "adresses" DROP COLUMN "city",
DROP COLUMN "state",
ADD COLUMN     "id_city" TEXT NOT NULL,
ADD COLUMN     "id_country" TEXT NOT NULL,
ADD COLUMN     "id_state" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;

-- CreateTable
CREATE TABLE "cities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "states" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "adresses" ADD CONSTRAINT "adresses_id_city_fkey" FOREIGN KEY ("id_city") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adresses" ADD CONSTRAINT "adresses_id_state_fkey" FOREIGN KEY ("id_state") REFERENCES "states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adresses" ADD CONSTRAINT "adresses_id_country_fkey" FOREIGN KEY ("id_country") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
