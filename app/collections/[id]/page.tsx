import CollectionPage from '@/Components/CollectionPage/CollectionPage';

const Collections = ({ params }: { params: { id: string } }) => {
    return <CollectionPage id={params.id} />;
};

export default Collections;
