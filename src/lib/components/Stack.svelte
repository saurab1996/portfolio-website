<script lang="ts">
    interface Tool {
      icon: string;
      title: string;
      desc: string;
      iconBg: string;
      iconColor: string;
    }
  
    const tools: Tool[] = [
      {
        icon: 'database',
        title: 'PostgreSQL & Redis',
        desc: 'Advanced sharding and caching.',
        iconBg: 'bg-[#6b7280]/15',
        iconColor: 'text-[#6b7280]',
      },
      {
        icon: 'data_object',
        title: 'Rust & Go',
        desc: 'High-performance systems programming.',
        iconBg: 'bg-[#e8e9fe]',
        iconColor: 'text-[#6366F1]',
      },
    ];
  </script>
  
  <section class="mb-24" id="stack">
    <!-- Header -->
    <div class="flex justify-between items-end mb-10">
      <div>
        <span class="text-[10px] font-bold tracking-[0.2em] uppercase text-[#6b7280] block mb-2">Technical Core</span>
        <h2 class="text-4xl font-bold tracking-tight text-[#191c1e]">Infrastructure Stack.</h2>
      </div>
      <div class="text-right hidden md:block">
        <span class="text-xs text-[#444748] font-mono block">NODE_VERSION: v20.x</span>
        <span class="text-xs text-[#444748] font-mono block">STATUS: OPTIMIZED</span>
      </div>
    </div>
  
    <!-- Bento grid -->
    <div class="grid grid-cols-6 gap-4">
      <!-- Cloud Native — large -->
      <div class="col-span-3 row-span-2 bg-[#f0f2f5] p-8 rounded-xl flex flex-col justify-between">
        <span class="material-symbols-outlined text-[#6366F1] text-4xl">cloud_queue</span>
        <div>
          <h3 class="font-bold text-xl mb-2 text-[#191c1e]">Cloud Native</h3>
          <p class="text-sm text-[#444748]">
            Expertise in AWS (EKS, RDS, Lambda) and GCP (GKE, Cloud Spanner) for planetary-scale applications.
          </p>
        </div>
      </div>
  
      <!-- Tool cards -->
      {#each tools as tool}
        <div class="col-span-3 bg-white shadow-[0_20px_40px_rgba(70,72,212,0.06)] p-6 rounded-xl flex items-center gap-4">
          <div class="p-3 rounded-lg flex-shrink-0 {tool.iconBg}">
            <span class="material-symbols-outlined {tool.iconColor}">{tool.icon}</span>
          </div>
          <div>
            <h4 class="font-bold text-sm text-[#191c1e]">{tool.title}</h4>
            <p class="text-xs text-[#444748]">{tool.desc}</p>
          </div>
        </div>
      {/each}
  
      <!-- IaC — full width -->
      <div class="col-span-6 bg-[#191c1e] text-[#f7f9fb] p-8 rounded-xl flex items-center justify-between">
        <div>
          <h3 class="font-bold text-xl mb-1">Terraform & Ansible</h3>
          <p class="text-sm opacity-70">Infrastructure as Code (IaC) specialist.</p>
        </div>
        <span class="material-symbols-outlined text-3xl opacity-50">code</span>
      </div>
    </div>
  </section>