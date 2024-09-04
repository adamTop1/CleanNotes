-- CreateEnum
CREATE TYPE "Category" AS ENUM ('PERSONAL', 'WORK', 'SHOPPING', 'OTHER');

-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'PERSONAL';
