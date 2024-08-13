import { groceryType } from '@/types/grocery';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';
import { FaTrash } from 'react-icons/fa6';
import { deleteGrocery } from '@/actions';

const DeleteGrocery = ({ grocery }: { grocery: groceryType }) => {
  return (
    <Form action={deleteGrocery}>
      <Input name="inputId" type="hidden" value={grocery.id} />
      <Button
        text={<FaTrash />}
        type="submit"
        bgColor="bg-red-800"
        actionButton
      />
    </Form>
  );
};

export default DeleteGrocery;
