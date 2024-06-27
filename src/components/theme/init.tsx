'use client'

export const InitUnoCssThemeScript = () => {
  const script = `const theme = document.documentElement.getAttribute('data-mantine-color-scheme');
  document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');`
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
