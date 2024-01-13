import { Tag } from '@/Types/Tag';

export interface Gif {
    collection: string;
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    name: string;
    updated: string;
    url: string;
    Tags: Tag[];
}
