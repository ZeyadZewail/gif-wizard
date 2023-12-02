import Homepage from '@/Components/Pages/Homepage/Homepage';

const Home = async ({ params }: { params: { slug: string } }) => {
    return <Homepage slug={params.slug} />;
};

export default Home;
