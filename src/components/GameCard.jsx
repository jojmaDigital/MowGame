import Link from 'next/link';

export default function GameCard({ title, imageSrc, playPath, slug }) {
  return (
    <Link href={`/game/${slug}`} className="block">
      <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 w-full h-40">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-200 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {title}
            </h3>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
