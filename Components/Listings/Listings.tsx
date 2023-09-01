'use client';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

const Listings = () => {
    const { data } = useQuery({ queryKey: ['posts'] }) as { data: number[] };
    const { data: initFilters } = useQuery({ queryKey: ['filters'] }) as {
        data: number[];
    };

    const [filters, setFilters] = useState(initFilters);
    const [filteredListings, setFilteredListings] = useState<number[]>();

    useMemo(() => {
        setFilteredListings(
            data ? data.filter(i => filters.includes(i)) : undefined
        );
    }, [data, filters]);

    return (
        <div className="flex flex-col">
            <h1>Non-Filtered</h1>
            {data ? (
                data.map(i => <h1 key={i}>{i}</h1>)
            ) : (
                <h1>{'Data not found'}</h1>
            )}
            <div className="divide-black border-black border-b" />
            <h1>Filtered</h1>
            <button onClick={() => setFilters([...filters, 2])}>
                Update Filter
            </button>
            {filteredListings ? (
                filteredListings.map(i => <h1 key={i}>{i}</h1>)
            ) : (
                <h1>{'Data not found'}</h1>
            )}
        </div>
    );
};

export default Listings;
