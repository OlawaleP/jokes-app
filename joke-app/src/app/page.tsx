"use client";

import { useState, useEffect } from 'react';
import JokeCard from './components/JokeCard';

interface Joke {
  id: string;
  value: string;
  icon_url: string;
  url: string;
  created_at: string;
  updated_at: string;
  categories: string[];
}

export default function Home() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-purple-200 p-4">
      <JokeCard joke={joke} loading={loading} onGetNewJoke={fetchJoke} />
    </main>
  );
}