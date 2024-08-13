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
