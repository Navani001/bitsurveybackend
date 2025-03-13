-- DropForeignKey
ALTER TABLE "SurveyQuestion" DROP CONSTRAINT "SurveyQuestion_optionTypeId_fkey";

-- AlterTable
ALTER TABLE "SurveyQuestion" ALTER COLUMN "optionTypeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "SurveyQuestion" ADD CONSTRAINT "SurveyQuestion_optionTypeId_fkey" FOREIGN KEY ("optionTypeId") REFERENCES "OptionType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
