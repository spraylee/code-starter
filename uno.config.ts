// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      // work with Mantine theme
      dark: {
        dark: '[data-mantine-color-scheme="dark"]',
        light: '[data-mantine-color-scheme="light"]',
      },
    }),
    presetIcons({
      // autoInstall: true,
      prefix: '',
    }),
    // ...
  ],
})
