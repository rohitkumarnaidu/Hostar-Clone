import { createContext, useContext, useEffect, useState } from 'react';
import { account } from '../lib/appwrite';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            setError(null);
            setLoading(true);
            
            // Check if environment variables are loaded
            if (!import.meta.env.VITE_APPWRITE_ENDPOINT || !import.meta.env.VITE_APPWRITE_PROJECT_ID) {
                console.warn('Appwrite configuration missing. Authentication will be disabled.');
                setUser(null);
                setError('Authentication not configured');
                return;
            }
            
            const currentUser = await account.get();
            setUser(currentUser);
        } catch (error) {
            console.error('Auth check failed:', error);
            setUser(null);
            // Don't set error for normal "not logged in" cases
            if (!error.message?.includes('User (role: guests) missing scope')) {
                setError(error.message || 'Authentication service unavailable');
            }
        } finally {
            setLoading(false);
        }
    };

    const loginWithGoogle = async () => {
        try {
            setLoading(true);
            setError(null);
            
            if (!import.meta.env.VITE_APPWRITE_ENDPOINT || !import.meta.env.VITE_APPWRITE_PROJECT_ID) {
                throw new Error('Authentication not configured. Please set up your Appwrite credentials.');
            }
            
            await account.createOAuth2Session(
                'google',
                window.location.origin,
                window.location.origin
            );
        } catch (error) {
            console.error('Login failed:', error);
            setError(error.message || 'Login failed');
            setLoading(false);
            throw error;
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            setError(null);
            await account.deleteSession('current');
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error);
            setError(error.message || 'Logout failed');
        } finally {
            setLoading(false);
        }
    };

    const value = {
        user,
        loading,
        error,
        loginWithGoogle,
        logout,
        checkAuth
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
