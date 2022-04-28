import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default interface Banner {
  buttonText: string;
  desc: string;
  discount: string;
  image: SanityImageSource;
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
  _createAt: string;
  _id: string;
  _rev: string;
  _type: 'banner';
  _updatedAt: string;
};