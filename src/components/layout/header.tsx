import { Title } from '@mantine/core'
import Link from 'next/link'
import { ColorSchemeToggle } from '../theme/toggle'
import { FC } from 'react'

export const Header: FC<{ maxWidth: string | number }> = ({ maxWidth }) => {
  return (
    <header className="h-60px border-solid border-b-1px border-gray-400/10 sticky top-0 dark:bg-[#212121] bg-white z-10">
      <div className="h-full w-full mx-auto flex items-center px-4" style={{ maxWidth }}>
        <Link href="/" className="flex items-center gap-2">
          {/* <img className="w-30px" src="/logo.svg" /> */}
          <Title order={4} className="mr-10">
            应用名称
          </Title>
        </Link>
        <div className="mr-auto" />
        <ColorSchemeToggle />
      </div>
    </header>
  )
}
