<<<<<<< HEAD
// Versi dari local Anda (HEAD)
/// <reference types="astro/client" />
/// <reference types="vite/client" />
interface MyYamlData {
  SITE: {
    name: string;
  };
}
=======
// Versi dari remote (origin/main)
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types" />
declare module '*.yaml' {
  interface MyYamlData {
    SITE: {
      name: string;
      website: string;
      trailingSlash: boolean;
    };
  }
}
>>>>>>> <commit_hash_remote>
