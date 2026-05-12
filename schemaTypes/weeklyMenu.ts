import {defineArrayMember, defineField, defineType} from 'sanity'

export const weeklyMenu = defineType({
  name: 'weeklyMenu',
  title: 'Mittagstisch Woche (Lunch Menu Week)',
  type: 'document',
  description: 'Weekly lunch specials — one document per week with daily dishes',
  fields: [
    defineField({
      name: 'weekStart',
      title: 'Wochenbeginn (Week Start)',
      type: 'date',
      description: 'Montag der Woche (Monday of the week)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'days',
      title: 'Tage (Days)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'day',
          title: 'Tag (Day)',
          fields: [
            defineField({
              name: 'date',
              title: 'Datum (Date)',
              type: 'date',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'weekday',
              title: 'Wochentag (Weekday)',
              type: 'string',
              options: {
                list: [
                  {title: 'Montag (Monday)', value: 'Montag'},
                  {title: 'Dienstag (Tuesday)', value: 'Dienstag'},
                  {title: 'Mittwoch (Wednesday)', value: 'Mittwoch'},
                  {title: 'Donnerstag (Thursday)', value: 'Donnerstag'},
                  {title: 'Freitag (Friday)', value: 'Freitag'},
                  {title: 'Samstag (Saturday)', value: 'Samstag'},
                  {title: 'Sonntag (Sunday)', value: 'Sonntag'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'dishes',
              title: 'Gerichte (Dishes)',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'reference',
                  to: [{type: 'dish'}],
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'weekday',
              subtitle: 'date',
            },
            prepare({title, subtitle}) {
              return {title, subtitle}
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'weekStart',
    },
    prepare({title}) {
      return {title: `Woche ab ${title}`}
    },
  },
  orderings: [
    {
      title: 'Neueste zuerst (Newest First)',
      name: 'weekStartDesc',
      by: [{field: 'weekStart', direction: 'desc'}],
    },
  ],
})
