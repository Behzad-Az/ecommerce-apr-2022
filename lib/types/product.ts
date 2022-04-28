import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default interface Product {
  details: string;
  image: SanityImageSource[];
  name: string;
  price: number;
  slug: { _type: 'slug', current: 'string' };
  _createAt: string;
  _id: string;
  _rev: string;
  _type: 'product';
  _updatedAt: string;
};