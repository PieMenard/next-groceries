'use server';

import { prisma } from '@/utils/prisma';
import { revalidatePath } from 'next/cache';

export async function createGrocery(formData: FormData) {
  const input = formData.get('input') as string;

  if (!input.trim()) {
    return;
  }

  await prisma.grocery.create({
    data: {
      name: input,
    },
  });

  revalidatePath('/');
}

export async function changeGroceryStatus(formData: FormData) {
  const inputId = formData.get('inputId') as string;
  const groceryToEdit = await prisma.grocery.findUnique({
    where: {
      id: inputId,
    },
  });

  await prisma.grocery.update({
    where: {
      id: inputId,
    },
    data: {
      isBought: !groceryToEdit?.isBought,
    },
  });

  revalidatePath('/');
}

export async function updateGrocery(formData: FormData) {
  const input = formData.get('editName') as string;
  const inputId = formData.get('inputId') as string;

  await prisma.grocery.update({
    where: {
      id: inputId,
    },
    data: {
      name: input,
    },
  });

  revalidatePath('/');
}

export async function deleteGrocery(formData: FormData) {
  const inputId = formData.get('inputId') as string;

  await prisma.grocery.delete({
    where: {
      id: inputId,
    },
  });

  revalidatePath('/');
}
