import CollectionContent from '@/Components/CollectionContent/CollectionContent';
import CollectionInfo from '@/Components/CollectionInfo/CollectionInfo';

const CollectionPage = async ({ id }: { id: string }) => {
    return (
        <div className="flex flex-col p-16 gap-8">
            <CollectionInfo id={id} />
            <CollectionContent id={id} />
        </div>
    );
};

export default CollectionPage;
