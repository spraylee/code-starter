import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from 'src/server/api/trpc'
import { TRPCError } from '@trpc/server'

export const postRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    if (false) {
      throw new TRPCError({ code: 'BAD_REQUEST', message: 'not implemented' })
    }
    return {
      greeting: `Hello ${input.text}`,
    }
  }),

  create: publicProcedure.input(z.object({ name: z.string().min(1) })).mutation(async ({ ctx, input }) => {
    // simulate a slow db call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // return ctx.db.post.create({
    //   data: {
    //     name: input.name,
    //   },
    // });
  }),

  getLatest: publicProcedure.query(({ ctx }) => {
    // throw new Error('not implemented')
    return { name: 'hello2' }
    // return ctx.db.post.findFirst({
    //   orderBy: { createdAt: "desc" },
    // });
  }),
})
