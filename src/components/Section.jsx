import GameCard from './GameCard';

export default function Section({ title, games }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
          View more
        </a>
      </div>
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {games.map((game) => (
          <div key={game.title} className="flex-shrink-0 w-48">
            <GameCard title={game.title} imageSrc={game.imageSrc} playPath={game.playPath} slug={game.slug} />
          </div>
        ))}
      </div>
    </div>
  );
}
