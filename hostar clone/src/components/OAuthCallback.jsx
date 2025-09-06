import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function OAuthCallback() {
    const { checkAuth } = useAuth();

    useEffect(() => {
        // Check if this is a callback from OAuth
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session');
        
        if (sessionId) {
            // This is an OAuth callback, check authentication
            checkAuth();
        }
    }, [checkAuth]);

    return null; // This component doesn't render anything
}
