import axios from 'axios';
import { SERVER_ADDRESS, SERVER_PORT } from '@/Util/configs/configs';
import { Collection } from '@/Types/Collection';

export const getAllCollections = async () => {
    const url = `http://${SERVER_ADDRESS}:${SERVER_PORT}/api/collections`;
    const response = await axios.get(url);
    const collections: Collection[] = await response.data.response;

    return collections;
};

export const getCollectionByID = async (id: string) => {
    const url = `http://${SERVER_ADDRESS}:${SERVER_PORT}/api/collections/${id}`;
    const response = await axios.get(url);
    const collection: Collection = await response.data.response;

    return collection;
};
