<script lang="ts">
  import { ContactForm } from '$lib/components/forms';
  import { ExternalLink, GlassCard } from '$lib/components/ui';
  import { EMAIL_ADDRESS, LINKEDIN_ADDRESS } from '$lib/config';
  import { User, Mail } from '@lucide/svelte';
</script>

<section class="full-width bg-surface-container-low py-20" id="contact">
  <div class="content-width">
    <!-- Section header (same pattern as About) -->
    <div
      class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16"
    >
      <p
        class="label-md text-muted-foreground font-bold tracking-[0.2em] uppercase"
      >
        Contact
      </p>

      <div
        class="hidden md:block flex-1 h-px mx-8 bg-linear-to-r from-transparent via-gray-300 to-transparent opacity-60"
      ></div>
    </div>

    <h2
      class="headline-font text-5xl font-bold text-on-surface tracking-tight mb-8"
    >
      Let’s Build Something <br />Robust.
    </h2>

    <!-- Glass container instead of hard white card -->
    <GlassCard
      class="grid grid-cols-1 md:grid-cols-2 gap-12
                p-10"
    >
      <!-- Info -->
      <div class="space-y-6">
        <p class="text-on-surface-variant leading-relaxed">
          Currently open to architectural consulting and lead engineering roles.
          Reach out for a technical deep-dive.
        </p>

        <!-- Contact items -->
        <ul class="flex flex-col gap-4">
          <!-- Email -->
          <li class="flex items-center gap-3">
            <Mail class="w-5 h-5 text-primary/80" stroke-width="1.5" />

            <ExternalLink
              href={`mailto:${EMAIL_ADDRESS}`}
              class="font-medium text-primary hover:opacity-80 transition"
            >
              {EMAIL_ADDRESS}
            </ExternalLink>
          </li>

          <!-- LinkedIn -->
          <li class="flex items-center gap-3">
            <User class="w-5 h-5 text-primary/80" stroke-width="1.5" />

            <ExternalLink
              href={LINKEDIN_ADDRESS}
              class="font-medium text-primary hover:opacity-80 transition"
            >
              {LINKEDIN_ADDRESS}
            </ExternalLink>
          </li>
        </ul>

        <!-- Optional CTA -->
        <div class="text-sm text-muted-foreground">
          Open to discussions via email or LinkedIn.
        </div>
      </div>

      <!-- Form -->
      <div>
        <ContactForm />
      </div>
    </GlassCard>
  </div>
</section>
