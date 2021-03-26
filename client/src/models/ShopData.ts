import { CollectionItem } from "./collectionItem";

export interface ShopData {
  [key: string]: {
    id: number;
    title: string;
    routeName: string;
    items: CollectionItem[];
  };
}
