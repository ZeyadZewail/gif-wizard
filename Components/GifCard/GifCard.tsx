import { Gif } from '@/Types/Gif';
import Image from 'next/image';
import { buttonColor } from '@/Util/configs/Theme';

const imageSize = {
    width: 250,
    height: 150,
};

const GifCard = ({ gif }: { gif: Gif }) => {
    return (
        <div
            className="flex flex-col rounded-3xl p-6 w-60 h-60 justify-between items-center cursor-pointer"
            style={{ backgroundColor: buttonColor }}
        >
            <Image
                width={imageSize.width}
                height={imageSize.height}
                style={{ maxHeight: imageSize.height }}
                src={gif.Link}
                alt={gif.Name}
            />
            <h1>{gif.Name}</h1>
        </div>
    );
};

export default GifCard;
