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
    METADATA: {
      description: string;
    };
    APP_BLOG: {
      isEnabled: boolean;
    };
  }

  const data: MyYamlData;
  export default data;
}
