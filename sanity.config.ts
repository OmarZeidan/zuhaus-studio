import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const SITE_SETTINGS_ID = 'siteSettings'
const STORY_PAGE_ID = 'storyPage'

export default defineConfig({
  name: 'default',
  title: 'zuhaus',

  projectId: 'bxkbnsqt',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Inhalt')
          .items([
            S.listItem()
              .title('Website Einstellungen (Site Settings)')
              .child(S.document().schemaType('siteSettings').documentId(SITE_SETTINGS_ID)),
            S.listItem()
              .title('Unsere Geschichte Seite (Story Page)')
              .child(S.document().schemaType('storyPage').documentId(STORY_PAGE_ID)),
            S.divider(),
            S.documentTypeListItem('announcement').title('Ankündigungen (Announcements)'),
            S.documentTypeListItem('weeklyMenu').title('Mittagstisch Wochen (Lunch Menus)'),
            S.documentTypeListItem('menuItem').title('Hauptgerichte (Main Dishes)'),
            S.documentTypeListItem('dish').title('Gericht Bibliothek (Dish Library)'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
