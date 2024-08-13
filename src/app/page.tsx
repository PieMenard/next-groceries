import AddGrocery from '@/components/groceries/AddGrocery';

export default function Home() {
  return (
    <div className="w-screen py-20 flex flex-col justify-center items-center">
      <span className="text-4xl font-extrabold uppercase">Next Groceries</span>
      <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
        Track your groceries!
      </h1>

      <div className="flex flex-col justify-center items-center">
        <AddGrocery />
        {/*list items*/}
      </div>
    </div>
  );
}
