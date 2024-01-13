'use client';

import CollectionContent from '@/Components/CollectionContent/CollectionContent';
import CollectionInfo from '@/Components/CollectionInfo/CollectionInfo';
import { useEffect, useState } from 'react';
import { RecordModel } from 'pocketbase';
import { pb } from '@/Util/Pocketbase';
import { Collection } from '@/Types/Collection';

const CollectionPage = ({ id }: { id: string }) => {
    const [data, setData] = useState<RecordModel>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const FetchData = async () => {
            try {
                const data = await pb
                    .collection('collections')
                    .getOne(id, { expand: 'gifs' });

                setData(data);
                setLoading(false);
            } catch (e) {}
        };

        void FetchData();
    }, [id]);

    return (
        <div className="flex flex-col p-16 gap-8">
            {loading ? (
                'Loading...'
            ) : (
                <>
                    <CollectionInfo collection={data as Collection} />
                    <CollectionContent collection={data as Collection} />
                </>
            )}
        </div>
    );
};

export default CollectionPage;
