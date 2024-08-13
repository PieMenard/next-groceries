import { groceryType } from '@/types/grocery';
import Button from '../Button';
import Form from '../Form';
import Input from '../Input';
import { FaCheck } from 'react-icons/fa';
import { changeGroceryStatus } from '@/actions';

const ChangeGroceryStatus = ({ grocery }: { grocery: groceryType }) => {
  return (
    <Form action={changeGroceryStatus}>
      <Input name="inputId" value={grocery.id} type="hidden" />
      <Button
        type="submit"
        text={<FaCheck />}
        actionButton
        bgColor={grocery.isBought ? 'bg-green-500' : 'bg-red-500'}
      />
    </Form>
  );
};

export default ChangeGroceryStatus;
