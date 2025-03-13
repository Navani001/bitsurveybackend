-- DropForeignKey
ALTER TABLE "OptionsQuestion" DROP CONSTRAINT "OptionsQuestion_questionId_fkey";

-- AddForeignKey
ALTER TABLE "OptionsQuestion" ADD CONSTRAINT "OptionsQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "SurveyQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
