import CollectionsList from '@/Components/CollectionsList/CollectionsList';
import getQueryClient from '@/Util/getQueryClient/getQueryClient';
import { getAllCollections } from '@/api-queries/Collection';
import getFilters from '@/Util/getFilters/getFilters';
import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';

const Homepage = async ({ slug }: { slug: string }) => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(['collections'], () => getAllCollections());
    await queryClient.prefetchQuery(['filters'], () => getFilters());
    const dehydratedState = dehydrate(queryClient);

    return (
        <Hydrate state={dehydratedState}>
            <div className="flex flex-col p-16 gap-8">
                <h1 className="text-7xl self-center">Collections</h1>{' '}
                <CollectionsList />
            </div>
        </Hydrate>
    );
};

export default Homepage;
