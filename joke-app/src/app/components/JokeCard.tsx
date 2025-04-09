import React from 'react';

interface Joke {
  id: string;
  value: string;
  icon_url: string;
  url: string;
  created_at: string;
  updated_at: string;
  categories: string[];
}

interface JokeCardProps {
  joke: Joke | null;
  loading: boolean;
  onGetNewJoke: () => void;
}

const JokeCard: React.FC<JokeCardProps> = ({ joke, loading, onGetNewJoke }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full">
      <div className="flex flex-col items-center space-y-12">
        <h1 className="text-base font-semibold text-center text-gray-400">Chuck Norris Jokes</h1>
        
        <div className="w-full min-h-[150px] flex items-center justify-center">
          {loading ? (
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-purple-200 rounded w-3/4"></div>
                <div className="h-4 bg-purple-200 rounded"></div>
                <div className="h-4 bg-purple-200 rounded w-5/6"></div>
              </div>
            </div>
          ) : (
            <p className="text-gray-700 text-center text-4xl">{joke?.value}</p>
          )}
        </div>
        
        <button
          onClick={onGetNewJoke}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-10 rounded-lg transition-colors duration-200 disabled:bg-purple-400"
        >
          Get Another Joke
        </button>
      </div>
    </div>
  );
};

export default JokeCard;