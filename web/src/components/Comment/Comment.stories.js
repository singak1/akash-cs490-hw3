// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Comment {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Comment from './Comment'

export const defaultView = () => {
  return (
    <Comment
      comment={{
        name: "Akash Test",
        body: "This is a test comment",
        createdAt: '2023-02-02T12:34:56Z',
        postId: 1
      }}
    />
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    id: 1,
    email: 'moderator@moderator.com',
    roles: 'moderator',
  })

  return (
    <Comment
      comment={{
        id: 1,
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2020-01-01T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
}
