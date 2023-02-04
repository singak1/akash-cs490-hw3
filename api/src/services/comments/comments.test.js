import { comments, createComment } from './comments'
import { db } from 'src/lib/db'

describe('comments', () => {
  scenario(
    'returns all comments for a single post from the database',
    async (scenario) => {
    const result = await comments({ postId: scenario.comment.fors.postId })
    const post = await db.post.findUnique({
      where: { id: scenario.comment.fors.postId },
      include: { comments: true },
    })
    expect(result.length).toEqual(post.comments.length)
  })

  scenario('postOnly', 'creates a new comment', async (scenario) => {
    const comment = await createComment({
      input: {
        name: 'Worlds #1 Dad',
        body: 'Wanna hear a joke?',
        post: {
          connect: { id: scenario.post.bark.id },
        },
      },
    })

    expect(comment.name).toEqual('Worlds #1 Dad')
    expect(comment.body).toEqual('Wanna hear a joke?')
    expect(comment.postId).toEqual(scenario.post.bark.id)
    expect(comment.createdAt).not.toEqual(null)
  })
})

