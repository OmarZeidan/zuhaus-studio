import {defineField, defineType} from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Hauptgericht (Main Dish)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung (Description)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'price',
      title: 'Preis (Price, €)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'tags',
      title: 'Diät-Tags (Diet Tags)',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Vegan', value: 'vegan'},
              {title: 'Vegetarisch (Vegetarian)', value: 'vegetarisch'},
              {title: 'Fisch (Fish)', value: 'fisch'},
              {title: 'Fleisch (Meat)', value: 'fleisch'},
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Reihenfolge (Order)',
      type: 'number',
      description: 'Niedrigere Zahlen erscheinen zuerst (Lower numbers appear first)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle ? `${Number(subtitle).toFixed(2).replace('.', ',')} €` : '',
      }
    },
  },
  orderings: [
    {
      title: 'Reihenfolge (Order)',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
