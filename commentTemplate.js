export const commentTemplate = [
  {
    type: 'form',
    attributes: { class: 'mt-2 d-none comment-form' },
    children: [
      {
        type: 'div',
        attributes: { class: 'mb-2' },
        children: [
          {
            type: 'input',
            attributes: {
              type: 'text',
              name: 'name',
              placeholder: 'Name',
              class: 'form-control',
            },
          },
        ],
      },
      {
        type: 'div',
        attributes: { class: 'mb-2' },
        children: [
          {
            type: 'input',
            attributes: {
              type: 'text',
              name: 'comment',
              placeholder: 'Comment',
              class: 'form-control',
            },
          },
        ],
      },
      {
        type: 'button',
        attributes: { class: 'btn btn-primary add-comment' },
        children: ['Add Comment'],
      },
    ],
  },
];
