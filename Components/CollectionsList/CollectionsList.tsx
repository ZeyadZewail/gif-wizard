'use client';
import { useEffect, useState } from 'react';
import { pb } from '@/Util/Pocketbase';
import { RecordModel } from 'pocketbase';
import CollectionCard from '@/Components/CollectionCard/CollectionCard';

const CollectionsList = () => {
    const [data, setData] = useState<RecordModel[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const FetchData = async () => {
            const data = await pb.collection('collections').getFullList();
            setData(data);
            setLoading(false);
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
                                collection={c}
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
