<script lang="ts">
  import { createForm } from '@tanstack/svelte-form';
  import { validate, contactFormRules } from '$lib/utils/validate';
  import type { ContactFormValues } from '$lib/types/forms.types';
  import Button from '../ui/Button.svelte';
  import { API_URL } from '$lib/config';
  import { CONTACT_POST } from '$lib/data/api-url';

  let submitted = $state(false);
  let error = $state<string | null>(null);

  const form = createForm(() => ({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    } satisfies ContactFormValues,
    onSubmit: async ({ value }) => {
      try {
        const res = await fetch(`${API_URL}${CONTACT_POST}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(value),
        });

        if (!res.ok) throw new Error('Submission failed');

        submitted = true;
      } catch (err) {
        console.error(err);
        error = 'Something went wrong. Please try again.';
      }
    },
  }));
</script>

{#if submitted}
  <div
    role="status"
    aria-live="polite"
    aria-label="Form submitted successfully"
    class="flex flex-col items-center justify-center gap-4 text-center text-on-surface-variant py-12"
  >
    <span
      class="material-symbols-outlined text-5xl text-primary"
      aria-hidden="true">check_circle</span
    >
    <p class="text-lg font-medium">
      Message received. I'll get back to you soon.
    </p>
  </div>
{:else}
  <form
    onsubmit={(e) => {
      e.preventDefault();
      form.handleSubmit();
    }}
    class="flex flex-col gap-6"
    aria-label="Contact form"
    novalidate
  >
    <!-- Name -->
    <form.Field
      name="name"
      validators={{
        onChange: ({ value }) =>
          validate(contactFormRules.required, contactFormRules.minName)(value),
      }}
    >
      {#snippet children(field)}
        {@const errorId = 'name-error'}
        {@const hasError =
          field.state.meta.isTouched && field.state.meta.errors.length > 0}
        <div class="flex flex-col gap-2">
          <label for="name" class="label">
            Full Name
            <span class="text-error ml-1" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Saurab Gupta"
            autocomplete="name"
            required
            aria-required="true"
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : undefined}
            value={field.state.value}
            oninput={(e) => field.handleChange(e.currentTarget.value)}
            onblur={field.handleBlur}
            class="w-full bg-surface-container-low rounded-lg p-4 border-0 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {#if hasError}
            <span id={errorId} role="alert" class="text-xs text-error">
              {field.state.meta.errors[0]}
            </span>
          {/if}
        </div>
      {/snippet}
    </form.Field>

    <!-- Email -->
    <form.Field
      name="email"
      validators={{
        onChange: ({ value }) =>
          validate(contactFormRules.required, contactFormRules.email)(value),
      }}
    >
      {#snippet children(field)}
        {@const errorId = 'email-error'}
        {@const hasError =
          field.state.meta.isTouched && field.state.meta.errors.length > 0}
        <div class="flex flex-col gap-2">
          <label for="email" class="label">
            Email Address
            <span class="text-error ml-1" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="hello@example.com"
            autocomplete="email"
            required
            aria-required="true"
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : undefined}
            value={field.state.value}
            oninput={(e) => field.handleChange(e.currentTarget.value)}
            onblur={field.handleBlur}
            class="w-full bg-surface-container-low rounded-lg p-4 border-0 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {#if hasError}
            <span id={errorId} role="alert" class="text-xs text-error">
              {field.state.meta.errors[0]}
            </span>
          {/if}
        </div>
      {/snippet}
    </form.Field>

    <!-- Message -->
    <form.Field
      name="message"
      validators={{
        onChange: ({ value }) =>
          validate(
            contactFormRules.required,
            contactFormRules.minMessage,
          )(value),
      }}
    >
      {#snippet children(field)}
        {@const errorId = 'message-error'}
        {@const hasError =
          field.state.meta.isTouched && field.state.meta.errors.length > 0}
        <div class="flex flex-col gap-2">
          <label for="message" class="label">
            Message
            <span class="text-error ml-1" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell me about your project, role, or just say hi."
            required
            aria-required="true"
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : undefined}
            value={field.state.value}
            oninput={(e) => field.handleChange(e.currentTarget.value)}
            onblur={field.handleBlur}
            class="w-full bg-surface-container-low rounded-lg p-4 border-0 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary resize-y"
          ></textarea>
          {#if hasError}
            <span id={errorId} role="alert" class="text-xs text-error">
              {field.state.meta.errors[0]}
            </span>
          {/if}
        </div>
      {/snippet}
    </form.Field>

    <form.Subscribe selector={(state) => state.canSubmit}>
      {#snippet children(canSubmit)}
        <Button
          type="submit"
          disabled={!canSubmit}
          aria-disabled={!canSubmit}
          size="md"
        >
          Send Message
        </Button>
        {#if error}
          <span role="alert" class="text-xs pt-2 text-error">
            {error}
          </span>
        {/if}
      {/snippet}
    </form.Subscribe>
  </form>
{/if}
