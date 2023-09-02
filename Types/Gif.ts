import { Collection } from '@/Types/Collection';
import { Tag } from '@/Types/Tag';

export interface Gif {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string;
    Name: string;
    Link: string;
    Collections: Collection[];
    Tags: Tag[];
}
