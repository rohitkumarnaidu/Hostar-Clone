import React, { useEffect, useState } from "react";

export default function MovieRow({ fetchUrl, title = "Movies" }) {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovie = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(fetchUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status}`);
      }
      
      const json = await response.json();
      setMovieList(json.results || []);
    } catch (err) {
      console.error('Error fetching movies:', err);
      setError(err.message);
      setMovieList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fetchUrl) {
      fetchMovie();
    }
  }, [fetchUrl]);

  if (loading) {
    return (
      <div className="ml-28 py-20">
        <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
        <div className="flex gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-[250px] h-[300px] bg-gray-800 animate-pulse rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ml-28 py-20">
        <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
        <div className="text-red-400 bg-red-900/20 p-4 rounded">
          Error loading movies: {error}
        </div>
      </div>
    );
  }

  if (!movieList.length) {
    return (
      <div className="ml-28 py-20">
        <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
        <div className="text-gray-400">No movies available</div>
      </div>
    );
  }

  return (
    <div className="ml-28 py-20">
      <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
      <div className="flex gap-1 overflow-x-scroll whitespace-nowrap scrollbar-hide">
        {movieList.map((movie) => (
          <img 
            key={movie.id}
            style={{height: 300, width: 250}} 
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title || movie.name || 'Movie poster'}
            className="object-cover rounded cursor-pointer hover:scale-105 transition-transform"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/250x300/333/fff?text=No+Image';
            }}
          />
        ))}
      </div>
    </div>
  );
}
