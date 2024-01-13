import { Gif } from '@/Types/Gif';
import { buttonColor } from '@/Util/configs/Theme';
import Image from 'next/image';

const imageSize = {
    width: 250,
    height: 150,
};

const GifCard = ({ gif }: { gif: Gif }) => {
    const saveLinkToClipboard = () => {
        void navigator.clipboard.writeText(gif.url);
    };

    return (
        <div
            className="flex flex-col rounded-3xl p-6 w-60 h-60 justify-between justify-self-center items-center cursor-pointer"
            style={{ backgroundColor: buttonColor }}
            onClick={saveLinkToClipboard}
        >
            <Image
                width={imageSize.width}
                height={imageSize.height}
                style={{ maxHeight: imageSize.height }}
                src={gif.url}
                alt={gif.name}
            />
            <h1>{gif.name}</h1>
        </div>
    );
};

export default GifCard;
