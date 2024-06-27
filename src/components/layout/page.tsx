import { ReactNode } from 'react'
import { Header } from './header'
import clsx from 'clsx'

export function Page(props: { children: ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr] h-full">
        <Header maxWidth={1200} />
        <main className="">
          <main
            {...props}
            className={clsx('mx-auto h-full grid p-4', props.className)}
            style={{ maxWidth: 1200, ...props.style }}
          >
            {props.children}
          </main>
        </main>
      </div>
    </>
  )
}
