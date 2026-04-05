<script lang="ts">
  import ContactForm from '$lib/components/forms/ContactForm.svelte';
  import { EMAIL_ADDRESS } from '$lib/config';
</script>

<section class="full-width bg-surface-container-low py-12" id="contact">
  <div
    class="content-width bg-white rounded-2xl p-12 shadow-[0_40px_80px_rgba(70,72,212,0.08)]"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Info -->
      <div>
        <h2 class="text-4xl font-bold tracking-tight mb-4 text-[#191c1e]">
          Let's Build Something Robust.
        </h2>
        <p class="text-[#444748] leading-relaxed mb-8">
          Currently open to architectural consulting and lead engineering roles.
          Reach out for a technical deep-dive.
        </p>
        <ul class="flex flex-col gap-4">
          <li class="flex items-center gap-3 text-[#6366F1]">
            <span class="material-symbols-outlined">mail</span>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              class="font-medium hover:opacity-75 transition-opacity"
              >{EMAIL_ADDRESS}</a
            >
          </li>
          <li class="flex items-center gap-3 text-[#6366F1]">
            <span class="material-symbols-outlined">alternate_email</span>
            <a
              href="https://linkedin.com/in/saurabg"
              target="_blank"
              rel="noreferrer"
              class="font-medium hover:opacity-75 transition-opacity"
            >
              linkedin.com/in/saurabg
            </a>
          </li>
        </ul>
      </div>

      <!-- Form / Success -->
      <ContactForm />
    </div>
  </div>
</section>
