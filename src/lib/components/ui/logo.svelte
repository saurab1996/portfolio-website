<script lang="ts">
  interface Props {
    mobile?: boolean;
    inverted?: boolean;
    class?: string;
  }
  const { inverted = false, class: className = '' }: Props = $props();
</script>

<svg class={className} width="120" height="44" viewBox="0 0 120 44">
  <rect width="44" height="44" rx="10" fill="var(--primary)" />

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
    fill="var(--primary-foreground)"
    text-anchor="middle"
  >
    SG
  </text>

  <text
    x="58"
    y="20"
    font-weight="800"
    font-size="15"
    fill={inverted ? 'var(--primary-foreground)' : 'var(--foreground)'}
  >
    Saurab
  </text>

  <text
    x="58"
    y="37"
    font-weight="400"
    font-size="12"
    fill="var(--primary)"
    letter-spacing="3"
  >
    GUPTA
  </text>
</svg>
