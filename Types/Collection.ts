import { Gif } from '@/Types/Gif';

export interface Collection {
    ID: string;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string;
    Name: string;
    Gifs: Gif[];
}
