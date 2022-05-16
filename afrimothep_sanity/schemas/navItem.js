export default {
  name: "navItem",
  type: "object",
  title: "NavItem",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Text"
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name: "navItemUrl",
      type: "link", // references link object
      title: "Nav Item URL"
    }
  ]
};
