<script>
  import { CDN_URL } from '$lib/config';
  import { RESUME_PDF } from '$lib/data/cdn-assets';
  import Button from './Button.svelte';
</script>

<Button
  href={`${CDN_URL}${RESUME_PDF}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Download CV"
  size="sm"
>
  Download CV
</Button>
