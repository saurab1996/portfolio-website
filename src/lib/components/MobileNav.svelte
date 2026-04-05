<script lang="ts">
    interface Tab {
      id: string;
      icon: string;
      label: string;
    }
  
    const tabs: Tab[] = [
      { id: 'stack',      icon: 'layers',   label: 'Stack' },
      { id: 'projects',   icon: 'database', label: 'Projects' },
      { id: 'contact',    icon: 'mail',     label: 'Contact' },
    ];
  
    let activeTab = $state('stack');
  
    function navigate(id: string) {
      activeTab = id;
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  </script>
  
  <nav class="md:hidden fixed bottom-0 left-0 w-full bg-[#f7f9fb]/80 backdrop-blur-xl border-t border-[#f2f4f6] flex justify-around items-center pt-3 pb-8 px-4 z-50">
    {#each tabs as tab}
      <button
        onclick={() => navigate(tab.id)}
        class="flex flex-col items-center gap-1 cursor-pointer border-none bg-transparent {activeTab === tab.id ? 'text-[#6366F1]' : 'text-[#444748]'} transition-colors"
        aria-label={tab.label}
      >
        <span class="material-symbols-outlined">{tab.icon}</span>
        <span class="text-[10px] uppercase tracking-widest font-medium">{tab.label}</span>
        {#if activeTab === tab.id}
          <span class="w-1 h-1 rounded-full bg-[#6366F1]"></span>
        {/if}
      </button>
    {/each}
  </nav>