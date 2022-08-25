/*
  Warnings:

  - Added the required column `street_number` to the `adresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adresses" ADD COLUMN     "street_number" INTEGER NOT NULL;
