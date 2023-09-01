import Image from 'next/image';
import getQueryClient from '@/Util/getQueryClient/getQueryClient';
import { dehydrate } from '@tanstack/query-core';
import { Hydrate } from '@tanstack/react-query';
import getPosts from '@/Util/getPosts/getPosts';
import Homepage from '@/Components/Homepage/Homepage';
import getFilters from '@/Util/getFilters/getFilters';

const Home = async ({ params }: { params: { slug: string } }) => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(['posts'], () => getPosts());
    await queryClient.prefetchQuery(['filters'], () =>
        getFilters(Number(params.slug))
    );
    console.log(params.slug);
    const dehydratedState = dehydrate(queryClient);

    return (
        <Hydrate state={dehydratedState}>
            <Homepage />
        </Hydrate>
    );
};

export default Home;
