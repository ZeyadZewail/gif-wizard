'use client';

import { useQuery } from '@tanstack/react-query';
import { Collection } from '@/Types/Collection';

const CollectionInfo = ({ id }: { id: string }) => {
    const { data } = useQuery({ queryKey: [`collection ${id}`] }) as {
        data: Collection;
    };

    return <div className="text-7xl self-center">{data.Name}</div>;
};

export default CollectionInfo;
