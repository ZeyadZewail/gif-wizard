import CollectionsList from '@/Components/CollectionsList/CollectionsList';

const Homepage = async ({ slug }: { slug: string }) => {
    return (
        <div className="flex flex-col p-16 gap-8">
            <h1 className="text-7xl self-center">Collections</h1>

            <CollectionsList />
        </div>
    );
};

export default Homepage;
