import imageUrlBuilder from '@sanity/image-url';
import { client } from './client'; // Aapka Sanity client yahan import hoga

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source).url();
}