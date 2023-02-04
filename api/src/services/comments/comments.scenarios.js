export const standard = defineScenario({
  comment: {
    fors: {
      data: {
        name: 'Forsen',
        body: 'What is this? a comment for four dimensional beings',
        post: { create: { title: 'ForsenCD', body: 'What is this? a comment for four dimensional beings' } },
      },
    },
    two: {
      data: {
        name: 'xQc',
        body: 'GOOD ONE DUDE, OMEGALUL',
        post: { create: { title: 'xqcL', body: 'GOOD ONE DUDE, OMEGALUL' } },
      },
    },
  },
})

export const postOnly = defineScenario({
  post: {
    bark: {
      data: {
        title: 'Yoke',
        body: "If you ever get cold, just stand in the corner of a room for a while. They’re normally around 90 degrees",
      }
    }
  }
})