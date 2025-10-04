'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import gameData from '../../data/game.json';

export default function GamePage() {
  const { slug } = useParams();
  const game = gameData.games[slug];

  const [description, setDescription] = useState('');

  useEffect(() => {
    if (game && game.description.startsWith('/')) {
      fetch(game.description)
        .then(res => res.text())
        .then(setDescription)
        .catch(() => setDescription('Description not available'));
    } else if (game) {
      setDescription(game.description);
    }
  }, [game]);

  if (!game) {
    return <div className="text-center mt-10">Game not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
      <div className="mb-6">
        <iframe
          src={game.playPath}
          className="w-full aspect-video max-w-5xl mx-auto border rounded"
          allowFullScreen
        ></iframe>
      </div>
      <div className="max-w-5xl mx-auto p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
