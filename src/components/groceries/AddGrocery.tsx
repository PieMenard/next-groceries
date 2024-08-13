import Button from '../Button';
import Form from '../Form';
import Input from '../Input';

const AddGrocery = () => {
  return (
    <div>
      <Form>
        <div className="flex gap-3 items-center">
          <Input name="input" type="text" placeholder="Add new grocery..." />
          <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddGrocery;
