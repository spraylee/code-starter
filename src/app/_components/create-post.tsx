'use client'

import { Button, Input } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { api } from 'src/trpc/react'

export function CreatePost() {
  const router = useRouter()
  const [name, setName] = useState('')
  const hello = api.post.hello.useQuery({ text: 'from tRPC' }, { throwOnError: false })
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh()
      setName('')
    },
  })

  return (
    <form
      className="flex gap-2"
      onSubmit={(e) => {
        e.preventDefault()
        createPost.mutateAsync({ name })
      }}
    >
      <Input type="text" placeholder="Title" value={name} onChange={(e) => setName(e.target.value)} />
      {hello.error && <p className="text-red-500">Something went wrong: {hello.error.message}</p>}
      <Button type="submit" disabled={createPost.isPending} loading={createPost.isPending}>
        Submit {hello.data?.greeting}
      </Button>
      <div className="tabler:puls" />
    </form>
  )
}
