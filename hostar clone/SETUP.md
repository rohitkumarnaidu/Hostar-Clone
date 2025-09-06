
then# Google Sign-In Setup Instructions

## Environment Configuration

Create a `.env` file in the root directory with the following content:

```env
# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id_here
```

## Appwrite Configuration

1. **OAuth Settings**: In your Appwrite console, make sure Google OAuth is enabled
2. **Redirect URI**: Set the redirect URI to `https://fra.cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/YOUR_PROJECT_ID`
3. **Google Console**: Ensure your Google OAuth app has the correct redirect URI configured

## Features Implemented

✅ **Google Sign-In Button**: Added to the homepage banner
✅ **OAuth Integration**: Uses Appwrite's OAuth2Session
✅ **User State Management**: Automatically updates user state after login
✅ **Error Handling**: Displays user-friendly error messages
✅ **Loading States**: Shows loading spinner during authentication
✅ **Navigation**: Automatically navigates to main app after successful login

## How to Use

1. Click the "Continue with Google" button on the homepage
2. You'll be redirected to Google's OAuth consent screen
3. After successful authentication, you'll be redirected back to the app
4. The user state will be updated and you'll see the user profile in the top-right corner

## Troubleshooting

- **OAuth Callback Error**: Check that your redirect URI is correctly configured in both Appwrite and Google Console
- **Provider Error**: Verify that Google OAuth is properly enabled in your Appwrite project
- **Project ID Error**: Ensure the project ID is correct in the `.env` file
