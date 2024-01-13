'use client';

import { Collection } from '@/Types/Collection';

const CollectionInfo = ({ collection }: { collection: Collection }) => {
    return <div className="text-7xl self-center">{collection.name}</div>;
};

export default CollectionInfo;
