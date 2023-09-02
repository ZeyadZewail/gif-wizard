'use client';
import { useQuery } from '@tanstack/react-query';
import { Collection } from '@/Types/Collection';
import GifGrid from '@/Components/GifGrid/GifGrid';

const CollectionContent = ({ id }: { id: string }) => {
    const { data } = useQuery({ queryKey: [`collection ${id}`] }) as {
        data: Collection;
    };

    return <GifGrid gifs={data.Gifs} />;
};

export default CollectionContent;
