import {defineField, defineType} from 'sanity'

export const announcement = defineType({
  name: 'announcement',
  title: 'Ankündigung (Announcement)',
  type: 'document',
  description: 'Featured events shown as highlight cards — Brunch, Trödel & Tafel, etc.',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel (Title)',
      type: 'string',
      description: 'e.g. "Brunch", "Trödel & Tafel"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung (Description)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Preis (Price)',
      type: 'string',
      description: 'e.g. "ab 18,90 €" or "8,50 €"',
    }),
    defineField({
      name: 'date',
      title: 'Datum (Date)',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timeRange',
      title: 'Uhrzeit (Time Range)',
      type: 'string',
      description: 'e.g. "11:00 – 14:00 Uhr"',
    }),
    defineField({
      name: 'badge',
      title: 'Badge-Text',
      type: 'string',
      description: 'Short label shown on the card, e.g. "Sonderangebot"',
      initialValue: 'Sonderangebot',
    }),
    defineField({
      name: 'active',
      title: 'Aktiv (Active)',
      type: 'boolean',
      description: 'Show this announcement on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      active: 'active',
    },
    prepare({title, subtitle, active}) {
      return {
        title: `${active ? '✅' : '⏸️'} ${title}`,
        subtitle,
      }
    },
  },
  orderings: [
    {
      title: 'Datum (Date)',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
  ],
})
