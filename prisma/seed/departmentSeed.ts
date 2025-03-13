import prisma from "../../src/lib/prisma";


const data = [
  {
    id: 1,
    department: "cse",
  },
];

async function DepartmentSeed() {
  for (const record of data) {
    await prisma.department.upsert({
      where: { id: record.id },
      create: record,
      update: record
    });
  }
}

export default DepartmentSeed;