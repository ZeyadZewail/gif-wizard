import getQueryClient from '@/Util/getQueryClient/getQueryClient';
import { getCollectionByID } from '@/api-queries/Collection';
import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';
import CollectionInfo from '@/Components/CollectionInfo/CollectionInfo';
import CollectionContent from '@/Components/CollectionContent/CollectionContent';

const CollectionPage = async ({ id }: { id: string }) => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery([`collection ${id}`], () =>
        getCollectionByID(id)
    );

    const dehydratedState = dehydrate(queryClient);

    return (
        <Hydrate state={dehydratedState}>
            <div className="flex flex-col p-16 gap-8">
                <CollectionInfo id={id} />
                <CollectionContent id={id} />
            </div>
        </Hydrate>
    );
};

export default CollectionPage;
