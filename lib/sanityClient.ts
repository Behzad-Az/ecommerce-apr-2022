import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityClient } from '@sanity/client';

export const client: SanityClient = sanityClient({
  projectId: 'p6ntsdmj',
  dataset: 'production',
  apiVersion: '2022-04-27',
  useCdn: true,
  token: process.env.SANITY_PUBLIC_TOKEN
});

const builder: ImageUrlBuilder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);