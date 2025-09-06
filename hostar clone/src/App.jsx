import React from 'react';
import Header from "/src/components/Header.jsx";
import Banner from "/src/components/Banner.jsx";
import Main from "/src/components/Main.jsx";
import MovieRow from "/src/components/MovieRow.jsx";
import OAuthCallback from "/src/components/OAuthCallback.jsx";
import ErrorBoundary from "/src/components/ErrorBoundary.jsx";
import { AuthProvider } from "/src/contexts/AuthContext.jsx";

export default function App() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  
  return (
    <ErrorBoundary>
      <AuthProvider>
        <OAuthCallback />
        <div className="bg-black min-h-screen">
          <Banner />
          <div className="relative">
            <Header />
            <Main />
          </div>
          <MovieRow 
            title="Now Playing" 
            fetchUrl={`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`}
          />
          <MovieRow 
            title="Popular Movies" 
            fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`}
          />
          <MovieRow 
            title="Top Rated" 
            fetchUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`}
          />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  )
}
