import { groceryType } from '@/types/grocery';
import EditGrocery from './EditGrocery';

const GroceryItem = ({ grocery }: { grocery: groceryType }) => {
  return (
    <div className="w-10/12 x-auto flex items-center justify-between gap-5 bg-slate-900 px-20 py-4 rounded-2xl">
      <span className="text-center font-bold uppercase grow">
        {grocery.name}
      </span>
      <EditGrocery grocery={grocery} />
    </div>
  );
};

export default GroceryItem;
