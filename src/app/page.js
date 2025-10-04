import Section from '../components/Section';
import gameData from './data/game.json';

const sectionsData = {
  'Featured Games': gameData.sections.featured.map(key => ({ slug: key, ...gameData.games[key], imageSrc: gameData.games[key].image })),
  'New Games': gameData.sections.new.map(key => ({ slug: key, ...gameData.games[key], imageSrc: gameData.games[key].image })),
  'Thinky Games': gameData.sections.brain.map(key => ({ slug: key, ...gameData.games[key], imageSrc: gameData.games[key].image })),
  'Action Games': gameData.sections.action.map(key => ({ slug: key, ...gameData.games[key], imageSrc: gameData.games[key].image })),
  'Sports Games': gameData.sections.sports.map(key => ({ slug: key, ...gameData.games[key], imageSrc: gameData.games[key].image })),
};

export default function Home() {
  return (
    <div>
      {Object.entries(sectionsData).map(([title, games]) => (
        <Section key={title} title={title} games={games} />
      ))}
    </div>
  );
}
