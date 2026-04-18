<script lang="ts">
  import { MenuIcon, XIcon } from 'lucide-svelte';
  import {
    Sheet,
    SheetTrigger,
    SheetHeader,
    SheetContent,
    SheetTitle,
    SheetClose,
  } from '$lib/components/overlays';
  import { HeaderNavigation } from '$lib/components/navigation';
  import { ResumeButton } from '$lib/components/buttons';
  import { Logo } from '$lib/components/ui';
</script>

<Sheet>
  <SheetTrigger class="lg:hidden">
    <MenuIcon size={28} />
  </SheetTrigger>
  <SheetContent side="right" class="[&>button]:hidden">
    <SheetHeader class="flex flex-row items-center justify-between">
      <SheetTitle>
        <Logo />
      </SheetTitle>
      <SheetClose>
        <XIcon size={28} />
      </SheetClose>
    </SheetHeader>
    <div class="flex flex-col gap-6 px-4 pt-6">
      <HeaderNavigation class="flex flex-col items-start gap-4" />
      <ResumeButton size="lg" />
    </div>
  </SheetContent>
</Sheet>
