import CollectionPage from '@/Components/Pages/CollectionPage/CollectionPage';

const Collections = ({ params }: { params: { id: string } }) => {
    return <CollectionPage id={params.id} />;
};

export default Collections;
