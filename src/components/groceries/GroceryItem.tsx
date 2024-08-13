import { groceryType } from '@/types/grocery';
import ChangeGroceryStatus from './ChangeGroceryStatus';
import EditGrocery from './EditGrocery';
import DeleteGrocery from './DeleteGrocery';

const GroceryItem = ({ grocery }: { grocery: groceryType }) => {
  const groceryStyle = {
    textDecoration: grocery.isBought ? 'line-through' : 'none',
    opacity: grocery.isBought ? 0.5 : 1,
  };
  return (
    <div
      style={groceryStyle}
      className="w-10/12 mx-auto flex items-center justify-between gap-5 bg-slate-900 px-20 py-2 rounded-xl"
    >
      <ChangeGroceryStatus grocery={grocery} />
      <span className="text-center font-bold uppercase grow">
        {grocery.name}
      </span>
      <div className="flex items-center mx-2">
        <EditGrocery grocery={grocery} />
      </div>
      <div className="flex items-center">
        <DeleteGrocery grocery={grocery} />
      </div>
    </div>
  );
};

export default GroceryItem;
