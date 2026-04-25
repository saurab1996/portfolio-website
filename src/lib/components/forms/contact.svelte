<script lang="ts">
  import { Button, Input, Textarea, Label } from "$lib/components/ui";
  import { useContactForm } from "$lib/hooks/use-contact-form.svelte";
  import CircleCheck from "@lucide/svelte/icons/circle-check";

  const { values, touched, errors, state, handleSubmit, touch } =
    useContactForm();
</script>

{#if state.submitted}
  <div
    role="status"
    aria-live="polite"
    class="flex flex-col items-center justify-center gap-4 text-center py-12"
  >
    <CircleCheck class="w-12 h-12 text-primary" />
    <p class="text-lg font-medium">
      Message received. I'll get back to you soon.
    </p>
  </div>
{:else}
  <form onsubmit={handleSubmit} class="flex flex-col gap-6" novalidate>
    <!-- Name -->
    <div class="grid gap-2">
      <Label for="name">Full Name *</Label>
      <Input
        id="name"
        placeholder="Saurab Gupta"
        bind:value={values.name}
        onblur={() => touch("name")}
        aria-invalid={touched.name && !!errors.name}
      />
      {#if touched.name && errors.name}
        <span class="text-xs text-destructive">{errors.name}</span>
      {/if}
    </div>

    <!-- Email -->
    <div class="grid gap-2">
      <Label for="email">Email Address *</Label>
      <Input
        id="email"
        type="email"
        placeholder="hello@example.com"
        bind:value={values.email}
        onblur={() => touch("email")}
        aria-invalid={touched.email && !!errors.email}
      />
      {#if touched.email && errors.email}
        <span class="text-xs text-destructive">{errors.email}</span>
      {/if}
    </div>

    <!-- Message -->
    <div class="grid gap-2">
      <Label for="message">Message *</Label>
      <Textarea
        id="message"
        rows={4}
        placeholder="Tell me about your project..."
        bind:value={values.message}
        onblur={() => touch("message")}
        aria-invalid={touched.message && !!errors.message}
      />
      {#if touched.message && errors.message}
        <span class="text-xs text-destructive">{errors.message}</span>
      {/if}
    </div>

    <!-- Submit -->
    <div class="flex flex-col gap-2 pt-2">
      <Button
        type="submit"
        disabled={!state.canSubmit || state.loading}
        size="lg"
      >
        {state.loading ? "Sending..." : "Send Message"}
      </Button>
      {#if state.error}
        <div
          role="alert"
          class="mt-2 flex items-start gap-2 rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm text-destructive"
        >
          <span class="mt-0.5 size-1.5 rounded-full bg-destructive shrink-0"
          ></span>

          <span class="leading-relaxed">
            {state.error}
          </span>
        </div>
      {/if}
    </div>
  </form>
{/if}
