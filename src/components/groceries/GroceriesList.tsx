import { prisma } from '@/utils/prisma';

async function getData() {
  const data = await prisma.grocery.findMany({
    select: {
      name: true,
      id: true,
      isBought: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });
  return data;
}

const GroceriesList = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
      {data.map((grocery) => (
        <div key={grocery.id}>{grocery.name}</div>
      ))}
    </div>
  );
};

export default GroceriesList;
