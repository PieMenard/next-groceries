import { groceryType } from '@/types/grocery';
import ChangeGroceryStatus from './ChangeGroceryStatus';

const GroceryItem = ({ grocery }: { grocery: groceryType }) => {
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between gap-5 bg-slate-900 px-20 py-2 rounded-xl">
      <span className="text-center font-bold uppercase grow">
        {grocery.name}
      </span>
      <ChangeGroceryStatus grocery={grocery} />
    </div>
  );
};

export default GroceryItem;
