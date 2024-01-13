'use client';
import { useEffect, useState } from 'react';
import { pb } from '@/Util/Pocketbase';
import { RecordModel } from 'pocketbase';
import CollectionCard from '@/Components/CollectionCard/CollectionCard';
import { Collection } from '@/Types/Collection';

const CollectionsList = () => {
    const [data, setData] = useState<RecordModel[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const FetchData = async () => {
            try {
                const data = await pb
                    .collection('collections')
                    .getFullList({ expand: 'gifs' });

                setData(data);
                setLoading(false);
            } catch (e) {}
        };

        void FetchData();
    }, []);

    return (
        <div>
            {loading ? (
                'Loading...'
            ) : (
                <div className="grid">
                    {data ? (
                        data.map(c => (
                            <CollectionCard
                                key={c.ID + c.CreatedAt}
                                collection={c as Collection}
                            />
                        ))
                    ) : (
                        <h1>{'Collections Data not found'}</h1>
                    )}
                </div>
            )}
        </div>
    );
};

export default CollectionsList;
