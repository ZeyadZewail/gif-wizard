'use client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import CollectionCard from '@/Components/CollectionCard/CollectionCard';
import { Collection } from '@/Types/Collection';

const CollectionsList = () => {
    const { data } = useQuery({ queryKey: ['collections'] }) as {
        data: Collection[];
    };
    const { data: initFilters } = useQuery({ queryKey: ['filters'] }) as {
        data: number[];
    };

    const [filters, setFilters] = useState(initFilters);
    const [filteredListings, setFilteredListings] = useState<number[]>();

    // useMemo(() => {
    //     setFilteredListings(
    //         data ? data.filter(i => filters.includes(i)) : undefined
    //     );
    // }, [data, filters]);

    return (
        <div className="grid">
            {data ? (
                data.map(c => (
                    <CollectionCard key={c.ID + c.CreatedAt} collection={c} />
                ))
            ) : (
                <h1>{'Collections Data not found'}</h1>
            )}
        </div>
    );
};

export default CollectionsList;
