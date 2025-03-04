import prisma from "../../src/lib/prisma";


const data = [
  {
    id: 1,
    name: "multiple choice",
   
  },
  {
    id: 1,
    name: "matrix",
   
  },
];
async function QuestionSeed() {
  for (const record of data) {
    await prisma.questionType.upsert({
      where: { id: record.id },
      create: record,
      update: record
    });
  }
}

export default QuestionSeed;