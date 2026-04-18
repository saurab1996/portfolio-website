// lib/hooks/use-contact-form.svelte.ts
import { CONTACT_POST } from '$lib/data/api-url';
import type { ContactFormValues } from '$lib/types/forms.types';
import { ApiError, request } from '$lib/utils/request';
import { useForm } from '$lib/hooks/use-form.svelte';

type ContactResponse = { message: string; success: boolean };

export function useContactForm() {
  return useForm<ContactFormValues>(
    { name: '', email: '', message: '' },
    {
      name: (v) =>
        !v.trim()
          ? 'Full name is required'
          : v.trim().length < 2
            ? 'Name must be at least 2 characters'
            : null,

      email: (v) =>
        !v.trim()
          ? 'Email is required'
          : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
            ? 'Invalid email address'
            : null,

      message: (v) =>
        !v.trim()
          ? 'Message is required'
          : v.trim().length < 10
            ? 'Message must be at least 10 characters'
            : null,
    },
    async (values) => {
      const payload = {
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      };

      const res = await request.post<ContactResponse>(CONTACT_POST, payload);

      if (!res?.success) {
        throw new ApiError(400, res?.message || 'Failed to send message');
      }
    },
  );
}
