'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { loggerLink, unstable_httpBatchStreamLink, httpLink } from '@trpc/client'
import { createTRPCReact } from '@trpc/react-query'
import { useState } from 'react'
import SuperJSON from 'superjson'

import { type AppRouter } from 'src/server/api/root'
import { notifications } from '@mantine/notifications'

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (error) => {
          notifications.show({
            color: 'red',
            message: isTRPCClientZodErrorError(error) ? getFirstErrorFromZodError(error) : error.message,
            title: 'Error',
          })
        },
      },
      queries: { retry: false },
    },
  })

let clientQueryClientSingleton: QueryClient | undefined = undefined
const getQueryClient = () => {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return createQueryClient()
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= createQueryClient())
}

export const api = createTRPCReact<AppRouter>()

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        // loggerLink({
        //   enabled: (op) =>
        //     process.env.NODE_ENV === "development" ||
        //     (op.direction === "down" && op.result instanceof Error),
        // }),
        unstable_httpBatchStreamLink({
          transformer: SuperJSON,
          url: getBaseUrl() + '/api/trpc',
          headers: () => {
            const headers = new Headers()
            headers.set('x-trpc-source', 'nextjs-react')
            return headers
          },
        }),
      ],
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  )
}

function getBaseUrl() {
  if (typeof window !== 'undefined') return window.location.origin
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export type TRPCClientZodErrorError = Error & {
  data: {
    httpStatus: number
    zodError: {
      fieldErrors: { [key: string]: string[] }
      formErrors: string[]
    }
  }
}

const isTRPCClientZodErrorError = (error: any): error is TRPCClientZodErrorError =>
  'data' in error && 'zodError' in error.data

const getFirstErrorFromZodError = (error: TRPCClientZodErrorError) => {
  if (error.data.zodError.fieldErrors) {
    for (const [key, value] of Object.entries(error.data.zodError.fieldErrors)) {
      if (value.length > 0) {
        return `${value[0]}`
      }
    }
  }
  return error.data.zodError.formErrors[0]
}
