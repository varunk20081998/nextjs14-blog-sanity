export default {
  name: 'blog',
  type: 'document',
  title: 'Title of the blog',
  fields: [
    {name: 'title', type: 'string', title: 'title of the article'},
    {
      name: 'slug',
      type: 'slug',
      title: 'slug of your blog article',
      options: {source: 'title'},
    },
    {name: 'titleImage', type: 'image', title: 'title Image'},
    {name: 'smallDescription', type: 'text', title: 'small Description'},
    {name: 'content', type: 'array', title: 'Content', of: [{type: 'block'}]},
  ],
}
