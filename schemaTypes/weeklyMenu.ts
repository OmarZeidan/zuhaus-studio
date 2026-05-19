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
              title: 'date',
            },
            prepare({title}) {
              const weekdays = [
                'Sonntag',
                'Montag',
                'Dienstag',
                'Mittwoch',
                'Donnerstag',
                'Freitag',
                'Samstag',
              ]
              const weekday = title
                ? weekdays[new Date(title + 'T12:00:00').getDay()]
                : 'Kein Datum'
              return {title: weekday, subtitle: title}
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
