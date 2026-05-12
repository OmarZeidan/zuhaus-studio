import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Website Einstellungen (Site Settings)',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Telefon (Phone)',
      type: 'string',
      description: 'Display format, e.g. "0621 5042894"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phoneE164',
      title: 'Telefon tel:-Link (Phone E.164)',
      type: 'string',
      description: 'For tel: link, e.g. "+496215042894"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'E-Mail',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'addressStreet',
      title: 'Straße (Street)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'addressCity',
      title: 'Stadt (City)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps Link',
      type: 'url',
      description: 'Link when clicking the address',
    }),
    defineField({
      name: 'googleMapsEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'iframe src for the map on the Standort page',
    }),
    defineField({
      name: 'openingHours',
      title: 'Öffnungszeiten (Opening Hours)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'days',
              title: 'Tage (Days)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'time',
              title: 'Zeit (Time)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {select: {title: 'days', subtitle: 'time'}},
        }),
      ],
    }),
    defineField({
      name: 'mittagstischDays',
      title: 'Mittagstisch Tage (Lunch Days)',
      type: 'string',
      description: 'e.g. "Montag bis Freitag"',
    }),
    defineField({
      name: 'mittagstischTime',
      title: 'Mittagstisch Zeit (Lunch Time)',
      type: 'string',
      description: 'e.g. "11:30 – 14:30 Uhr"',
    }),
    defineField({
      name: 'mittagstischPrice',
      title: 'Mittagstisch Preis (Lunch Price)',
      type: 'string',
      description: 'e.g. "ab 8,90 €"',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Website Einstellungen'}
    },
  },
})
