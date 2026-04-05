<script lang="ts">
  interface Props {
    mobile?: boolean;
    inverted?: boolean;
    class?: string;
  }
  const {
    mobile = false,
    inverted = false,
    class: className = '',
  }: Props = $props();
</script>

{#if mobile}
  <svg
    class={className}
    width="36"
    height="36"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="44" height="44" rx="10" fill="#6366F1" />
    <path
      d="M14 10 L10 10 L10 34 L14 34"
      stroke="white"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <path
      d="M30 10 L34 10 L34 34 L30 34"
      stroke="white"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <text
      x="22"
      y="26"
      font-weight="800"
      font-size="13"
      fill="white"
      text-anchor="middle"
      letter-spacing="-0.5">SG</text
    >
  </svg>
{:else}
  <svg
    class={className}
    width="210"
    height="44"
    viewBox="0 0 210 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="44" height="44" rx="10" fill="#6366F1" />
    <path
      d="M14 10 L10 10 L10 34 L14 34"
      stroke="white"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <path
      d="M30 10 L34 10 L34 34 L30 34"
      stroke="white"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <text
      x="22"
      y="26"
      font-weight="800"
      font-size="13"
      fill="white"
      text-anchor="middle"
      letter-spacing="-0.5">SG</text
    >
    <text
      x="58"
      y="20"
      font-weight="800"
      font-size="15"
      fill={inverted ? 'white' : '#191c1e'}
      letter-spacing="-0.3">Saurab</text
    >
    <text
      x="58"
      y="37"
      font-weight="400"
      font-size="12"
      fill="#6366F1"
      letter-spacing="3">GUPTA</text
    >
  </svg>
{/if}
