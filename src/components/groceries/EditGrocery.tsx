'use client';

import { useState } from 'react';
import Button from '../Button';
import { MdEdit } from 'react-icons/md';
import Input from '../Input';
import Form from '../Form';
import { groceryType } from '@/types/grocery';
import { updateGrocery } from '@/actions';

const EditGrocery = ({ grocery }: { grocery: groceryType }) => {
  const [editGroceryInput, setEditGroceryInput] = useState(false);

  const handleEdit = () => {
    setEditGroceryInput(!editGroceryInput);
  };

  const handleSubmit = () => {
    setEditGroceryInput(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button
        type="button"
        onClick={handleEdit}
        text={<MdEdit />}
        actionButton
        bgColor="bg-slate-500"
      />
      {editGroceryInput ? (
        <Form action={updateGrocery} onSubmit={handleSubmit}>
          <Input name="inputId" value={grocery.id} type="hidden" />
          <div className="flex justify-center gap-5">
            <Input name="editName" type="text" placeholder="Edit Grocery..." />
            <Button type="submit" text="Save" bgColor="bg-orange-600" />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditGrocery;
