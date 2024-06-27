import { CreatePost } from 'src/app/_components/create-post'
import { Page } from 'src/components/layout/page'
import { api } from 'src/trpc/server'

export default async function Home() {
  // const hello = await api.post.hello({ text: 'from tRPC' })

  return (
    <Page className="place-items-center">
      <CrudShowcase />
    </Page>
  )
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest()

  return (
    <div className={'light:text-red-300 font-bold text-yellow-500 flex flex-col gap-4'}>
      {latestPost ? <p>Your most recent post: {latestPost.name}</p> : <p>You have no posts yet.</p>}
      <CreatePost />
    </div>
  )
}
