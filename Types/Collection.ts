import { Gif } from '@/Types/Gif';
import { RecordModel } from 'pocketbase';

export interface Collection extends RecordModel {
    id: string;
    created: string;
    updated: string;
    deleted: string;
    name: string;
    expand: { gifs: Gif[] };
    gifs: string[];
}
