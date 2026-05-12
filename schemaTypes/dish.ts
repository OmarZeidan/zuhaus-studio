import {defineField, defineType} from 'sanity'

export const dish = defineType({
  name: 'dish',
  title: 'Gericht (Dish)',
  type: 'document',
  description: 'Dish library — reuse these when building the weekly lunch menu',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Diät-Tag (Diet Tag)',
      type: 'string',
      options: {
        list: [
          {title: 'Vegan', value: 'vegan'},
          {title: 'Vegetarisch (Vegetarian)', value: 'vegetarisch'},
          {title: 'Fisch (Fish)', value: 'fisch'},
          {title: 'Fleisch (Meat)', value: 'fleisch'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'tag'},
  },
  orderings: [
    {
      title: 'Name A–Z',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
    {
      title: 'Diät-Tag (Diet Tag)',
      name: 'tagAsc',
      by: [{field: 'tag', direction: 'asc'}],
    },
  ],
})
