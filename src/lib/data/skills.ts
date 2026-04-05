export const skillGroups = [
  {
    category: 'DevOps',
    skills: [
      { name: 'AWS / GCP' },
      { name: 'Docker / Kubernetes' },
      { name: 'CI/CD Pipelines' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'PHP / Laravel', icon: 'devicon-php-plain' },
      { name: 'WordPress (Core/Custom)', icon: 'devicon-wordpress-plain' },
      { name: 'Node.js / Express' },
      { name: 'PostgreSQL / Redis' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React / Next.js', icon: 'devicon-react-original' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Vue.js' },
    ],
  },
  {
    category: 'Version Control',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Bitbucket' },
      { name: 'GitLab' },
    ],
  },
] as const;
