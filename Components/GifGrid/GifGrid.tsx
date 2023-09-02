import { Gif } from '@/Types/Gif';
import GifCard from '@/Components/GifCard/GifCard';
import Image from 'next/image';
import plus from '../../assets/plus.svg';

const GifGrid = ({ gifs }: { gifs: Gif[] }) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns:
                    'repeat(auto-fit, minmax(240px, max-content))',
                gap: '16px',
            }}
            className="2xl:justify-start justify-center"
        >
            {gifs.map(gif => (
                <GifCard key={gif.Name + gif.CreatedAt} gif={gif} />
            ))}
            <div className="opacity-50 flex flex-col rounded-3xl  p-6 w-80 h-60 justify-center items-center cursor-pointer">
                <Image src={plus} alt="plus" style={{ maxHeight: '80%' }} />
            </div>
        </div>
    );
};

export default GifGrid;
