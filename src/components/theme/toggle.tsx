'use client'

import { ActionIcon, Button, Group, Tooltip, useMantineColorScheme } from '@mantine/core'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Sun, MoonStars } from 'tabler-icons-react'

export function ColorSchemeToggle() {
  const [localTheme, setLocalTheme] = useState('light')
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  useEffect(() => {
    setLocalTheme(colorScheme === 'dark' ? 'dark' : 'light')
  }, [colorScheme])

  return (
    <div>
      <Group>
        <Tooltip label={colorScheme === 'dark' ? '关闭暗黑模式' : '开启暗黑模式'}>
          <ActionIcon onClick={() => toggleColorScheme()} size="lg" color="gray" variant="light">
            {localTheme === 'dark' ? <Sun size={18} color="yellow" /> : <MoonStars size={18} color="gray" />}
          </ActionIcon>
        </Tooltip>
      </Group>
    </div>
  )
}
