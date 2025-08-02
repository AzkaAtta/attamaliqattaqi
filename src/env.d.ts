// src/env.d.ts
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="astro/client" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="../vendor/integration/types" />

declare module '*.yaml' {
  interface MyYamlData {
    SITE: {
      name: string;
      website: string;
      trailingSlash: boolean;
      title?: string;
      description?: string;
    };
    METADATA: {
      description: string;
      title?: string;
    };
    APP_BLOG?: {
      isEnabled?: boolean;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      list?: any; // Tambahkan komentar ini jika Anda tidak ingin mempersempit tipe 'list'
    };
    site?: {
      name?: string;
      description?: string;
    };
    contact?: {
      email?: string;
    };
  }
  const data: MyYamlData;
  export default data;
}
