import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Docs',
      social: {
        github: 'https://github.com/Vicente015/tareaUT7SSF',
      },
      sidebar: [
        {
          label: 'Tutoriales',
          autogenerate: { directory: 'guides' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
