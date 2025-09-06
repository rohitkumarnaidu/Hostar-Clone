import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Banner() {
  const { user, loading, loginWithGoogle, error } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  return (
    <div>
      <div className="main bg-gray-900 flex flex-row">
        <div className="image max-w-[600px] ml-28">
          <img 
            className="w-full h-full rounded-lg" 
            src='https://shifu.hotstarext.com/SOURCE/VOD/cd-2025-08-04/SalakaarDTD_BB_Web-57681ec4-6645-4418-92a3-aa4f73849b48.jpg'
            alt="Salakaar movie poster"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400/333/fff?text=Movie+Poster';
            }}
          />
        </div>
        <div className="text text-white py-7 px-12 font-sans">
          <h4>Salakaar</h4>
          <p className='text-gray-500'>Streaming from 8 August</p>
          <div className='text-white py-7'>An indian guy goes uncover in the edge of this thriller</div>
          
          {/* Personalized greeting for logged-in users */}
          {user && !loading && (
            <div className="text-sm text-gray-400 mb-4">
              Welcome back, {user.name || user.email || 'User'}!
            </div>
          )}
          
          <div className="flex gap-4 items-center flex-wrap">
            <button className='bg-gray-800 hover:bg-gray-700 font-bold px-4 py-2 rounded transition-colors'>
              Explore
            </button>
            
            {/* Google Sign-In Button - Primary CTA */}
            {!user && !loading && (
              <button 
                onClick={handleGoogleSignIn}
                className='bg-blue-600 hover:bg-blue-700 font-bold px-4 py-2 rounded transition-colors flex items-center gap-2'
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            )}
            
            {/* Show different button text based on auth status */}
            {user && !loading ? (
              <button className='bg-red-600 hover:bg-red-700 font-bold px-4 py-2 rounded transition-colors'>
                Add to Watchlist
              </button>
            ) : null}
          </div>
          
          {/* Error Display */}
          {error && (
            <div className="mt-4 text-sm text-red-400 bg-red-900/20 p-3 rounded">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
