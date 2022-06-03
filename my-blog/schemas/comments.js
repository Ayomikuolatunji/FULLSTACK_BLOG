export default {
    name: 'comment',
    title: 'comment',
    type: 'document',
    fields: [
      {
        name: 'username',
        type: 'string',
      },{
        name: 'Approved',
        title: 'Approved',
        type: 'boolean',
        description:"comments wont show on the site without approval"
      },
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'comment',
        type: 'text',
      },
      {
        name: 'post',
        type: 'reference',
        to: [{type: 'post'}]
      },
    ],
  }
  