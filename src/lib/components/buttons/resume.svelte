<script lang="ts">
  import { CDN_URL } from '$lib/config';
  import { RESUME_PDF } from '$lib/data/cdn-assets';
  import { Button } from '$lib/components/ui';
  import type { ButtonProps } from '$lib/components/ui';
  let props: ButtonProps = $props();
</script>

<Button
  href={`${CDN_URL}${RESUME_PDF}`}
  download
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Download CV"
  {...props}
>
  Download CV
</Button>
