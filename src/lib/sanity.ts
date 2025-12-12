import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '6p03pl68',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});
