# Hostar Clone - Authentication System

This document provides comprehensive information about the authentication system implemented in the Hostar Clone project using Appwrite and Google OAuth.

## 🚀 Quick Start

### Prerequisites
- Node.js and npm installed
- Appwrite project configured with Google OAuth
- Google Cloud Console project with OAuth credentials

### Installation
1. Install dependencies:
```bash
npm install appwrite
```

2. Configure environment variables in `.env`:
```env
VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id_here
```

## 🏗️ Architecture Overview

### File Structure
```
src/
├── lib/
│   └── appwrite.js          # Appwrite client configuration
├── contexts/
│   └── AuthContext.jsx      # Authentication context and provider
└── components/
    ├── Banner.jsx           # Contains Google Sign-In button
    └── Header.jsx           # Shows user profile when authenticated
```

### Core Components

#### 1. Appwrite Configuration (`src/lib/appwrite.js`)
- Initializes Appwrite client with endpoint and project ID
- Exports configured `account` service for authentication operations

#### 2. Authentication Context (`src/contexts/AuthContext.jsx`)
- Provides global authentication state management
- Handles user session persistence
- Manages loading states during authentication

## 🔧 API Reference

### AuthContext Hook
```javascript
import { useAuth } from '../contexts/AuthContext';

const { user, loading, loginWithGoogle, logout, checkAuth } = useAuth();
```

#### Properties
- `user`: Current authenticated user object (null if not authenticated)
- `loading`: Boolean indicating if authentication operation is in progress

#### Methods
- `loginWithGoogle()`: Initiates Google OAuth flow
- `logout()`: Signs out current user and clears session
- `checkAuth()`: Manually checks current authentication status

### Usage Examples

#### Basic Authentication Check
```javascript
import { useAuth } from '../contexts/AuthContext';

function MyComponent() {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;
    
    return (
        <div>
            {user ? (
                <p>Welcome, {user.name}!</p>
            ) : (
                <p>Please sign in</p>
            )}
        </div>
    );
}
```

#### Google Sign-In Button
```javascript
import { useAuth } from '../contexts/AuthContext';

function SignInButton() {
    const { loginWithGoogle, loading } = useAuth();

    const handleSignIn = async () => {
        try {
            await loginWithGoogle();
        } catch (error) {
            console.error('Sign in failed:', error);
        }
    };

    return (
        <button 
            onClick={handleSignIn} 
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded"
        >
            {loading ? 'Signing in...' : 'Continue with Google'}
        </button>
    );
}
```

#### Sign Out Functionality
```javascript
import { useAuth } from '../contexts/AuthContext';

function SignOutButton() {
    const { logout, loading } = useAuth();

    const handleSignOut = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Sign out failed:', error);
        }
    };

    return (
        <button 
            onClick={handleSignOut} 
            disabled={loading}
            className="bg-red-600 text-white px-4 py-2 rounded"
        >
            {loading ? 'Signing out...' : 'Sign Out'}
        </button>
    );
}
```

## 🔐 Security Features

### Session Management
- Automatic session persistence across browser refreshes
- Secure token handling through Appwrite SDK
- Session expiration handling

### Error Handling
- Graceful handling of authentication failures
- User-friendly error messages
- Automatic retry mechanisms for network issues

## 🛠️ Configuration

### Appwrite Setup
1. **Create Appwrite Project**: Set up a new project in Appwrite console
2. **Enable Google OAuth**: Navigate to Auth → Settings → OAuth2 Providers
3. **Configure Redirect URI**: Set to `https://fra.cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/YOUR_PROJECT_ID`

### Google Cloud Console Setup
1. **Create OAuth 2.0 Client**: In Google Cloud Console → APIs & Services → Credentials
2. **Set Authorized Redirect URIs**: Add the Appwrite callback URL
3. **Configure OAuth Consent Screen**: Set up app information and scopes

## 🚨 Troubleshooting

### Common Issues

#### OAuth Callback Error
**Problem**: Redirect URI mismatch
**Solution**: Ensure redirect URIs match exactly in both Appwrite and Google Console

#### Provider Error
**Problem**: Google OAuth not properly enabled
**Solution**: Verify Google OAuth is enabled in Appwrite project settings

#### Project ID Error
**Problem**: Incorrect project ID in environment variables
**Solution**: Double-check project ID in Appwrite console matches `.env` file

#### Session Not Persisting
**Problem**: User gets logged out on page refresh
**Solution**: Ensure `checkAuth()` is called in `useEffect` on app initialization

### Debug Mode
Enable debug logging by adding to your component:
```javascript
useEffect(() => {
    console.log('Auth state:', { user, loading });
}, [user, loading]);
```

## 📱 Integration Guide

### App.jsx Integration
```javascript
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthProvider>
            {/* Your app components */}
        </AuthProvider>
    );
}
```

### Protected Routes
```javascript
import { useAuth } from '../contexts/AuthContext';

function ProtectedComponent() {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>Please sign in to access this content</div>;

    return <div>Protected content here</div>;
}
```

## 🔄 Authentication Flow

1. **Initial Load**: App checks for existing session using `checkAuth()`
2. **Sign In**: User clicks Google Sign-In button → redirected to Google OAuth
3. **Callback**: Google redirects back to app with authorization code
4. **Session Creation**: Appwrite creates session and returns user data
5. **State Update**: AuthContext updates user state throughout app
6. **Persistence**: Session persists across browser refreshes

## 📊 User Object Structure

When authenticated, the user object contains:
```javascript
{
    $id: "unique_user_id",
    name: "User Name",
    email: "user@example.com",
    emailVerification: true,
    prefs: {},
    registration: "2024-01-01T00:00:00.000+00:00",
    status: true
}
```

## 🎯 Best Practices

1. **Always check loading state** before rendering authentication-dependent UI
2. **Handle errors gracefully** with user-friendly messages
3. **Use the context hook** instead of directly accessing Appwrite methods
4. **Implement proper loading states** for better UX
5. **Test authentication flow** in different browsers and incognito mode

## 📞 Support

For issues related to:
- **Appwrite**: Check [Appwrite Documentation](https://appwrite.io/docs)
- **Google OAuth**: Refer to [Google OAuth Guide](https://developers.google.com/identity/protocols/oauth2)
- **React Context**: See [React Context Documentation](https://react.dev/reference/react/useContext)
