export default {
  name: 'heroBanner',
  title: 'Hero Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
     {
      name: 'subTitle',
      title: 'Title 2',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'callToAction',
      title: 'Call To Action',
      type: 'string',
    },
     {
      name: 'cta_outline',
      title: 'CTA',
      type: 'string',
    },

  ]
}
