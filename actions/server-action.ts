'use server';

import { createSafeActionClient } from 'next-safe-action';
import { formSchema } from '@/lib/form-schema';

const actionClient = createSafeActionClient();

export const serverAction = actionClient
  .schema(formSchema)
  .action(async ({ parsedInput }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/forms/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form_type: 'contact',
          name: parsedInput.name,
          email: parsedInput.email,
          company: parsedInput.company,
          message: parsedInput.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      return { success: true };
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Unknown error');
    }
  });
