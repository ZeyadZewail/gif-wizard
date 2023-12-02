import PocketBase from 'pocketbase';
import { SERVER_ADDRESS } from '@/Util/configs/configs';

export const pb = new PocketBase(`http://${SERVER_ADDRESS}:8090`);
