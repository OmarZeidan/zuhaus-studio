import {defineArrayMember, defineField, defineType} from 'sanity'

export const storyPage = defineType({
  name: 'storyPage',
  title: 'Unsere Geschichte Seite (Story Page)',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Überschrift (Headline)',
      type: 'string',
      description: 'e.g. "Ein Ort, tausend Geschichten."',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Unterüberschrift (Subheadline)',
      type: 'string',
      description: 'e.g. "Erlebe die Vielfalt. Ein Ort, viele Kulturen."',
    }),
    defineField({
      name: 'storyParagraphs',
      title: 'Absätze (Story Paragraphs)',
      type: 'array',
      description: 'The main body text paragraphs about the restaurant',
      of: [defineArrayMember({type: 'text', rows: 4})],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'pullQuote',
      title: 'Zitat (Pull Quote)',
      type: 'text',
      rows: 3,
      description: 'The highlighted quote block on the right side',
    }),
    defineField({
      name: 'values',
      title: 'Werte (Values)',
      type: 'array',
      description: 'The 4 value cards (Toleranz, Gerechtigkeit, etc.)',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel (Title)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Beschreibung (Description)',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'text'}},
        }),
      ],
      validation: (Rule) => Rule.min(1).max(6),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Unsere Geschichte'}
    },
  },
})
