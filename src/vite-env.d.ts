/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPOONACULAR_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
