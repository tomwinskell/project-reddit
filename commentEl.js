export const commentEl = [
  {
    type: 'div',
    attributes: { class: 'm-3 d' },
    children: [
      {
        type: 'div',
        attributes: { class: 'mb-3' },
        children: [
          {
            type: 'input',
            attributes: {
              type: 'text',
              name: 'name',
              placeholder: 'name',
              class: 'form-control',
            },
          },
        ],
      },
      {
        type: 'div',
        attributes: { class: 'mb-3' },
        children: [
          {
            type: 'input',
            attributes: {
              type: 'text',
              name: 'comment',
              placeholder: 'comment',
              class: 'form-control',
            },
          },
        ],
      },
      {
        type: 'button',
        attributes: { class: 'btn btn-primary' },
        children: ['Comment'],
      },
    ],
  },
];
