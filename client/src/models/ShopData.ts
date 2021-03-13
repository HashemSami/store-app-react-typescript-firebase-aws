import { CollectionItem } from "./collectionItem";

export interface ShopData {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
}
