'use client';

import { useRouter } from 'next/navigation';
import { buttonColor } from '@/Util/configs/Theme';
import { RecordModel } from 'pocketbase';

const CollectionCard = ({ collection }: { collection: RecordModel }) => {
    const router = useRouter();
    const onClickNav = () => {
        router.push(`/collections/${collection.ID}`);
    };

    return (
        <div
            className="flex flex-col rounded-3xl bg-gray-400 bg-opacity-50 p-6 w-60 h-60 justify-between items-center cursor-pointer"
            style={{ backgroundColor: buttonColor }}
            onClick={onClickNav}
        >
            <h1>{collection.name}</h1>
            <p>{`Gif count: ${collection.gifs.length}`}</p>
        </div>
    );
};

export default CollectionCard;
