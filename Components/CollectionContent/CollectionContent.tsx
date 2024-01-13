'use client';

import GifGrid from '@/Components/GifGrid/GifGrid';
import { Collection } from '@/Types/Collection';

const CollectionContent = ({ collection }: { collection: Collection }) => {
    return <GifGrid gifs={collection.expand.gifs} />;
};

export default CollectionContent;
