# 🎬 Hostar Clone - Netflix/Hotstar Inspired Streaming Platform

A modern, responsive streaming platform built with React, Vite, and Tailwind CSS, featuring Google OAuth authentication via Appwrite and real-time movie data from The Movie Database (TMDB) API.

![Hostar Clone](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1.12-38B2AC) ![Appwrite](https://img.shields.io/badge/Appwrite-19.0.0-F02E65)

## ✨ Features

- 🎭 **Movie Streaming Interface** - Netflix/Hotstar inspired UI with movie rows and hero sections
- 🔐 **Google OAuth Authentication** - Secure login with Appwrite integration
- 🎬 **Real-time Movie Data** - Live data from The Movie Database (TMDB) API
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI/UX** - Dark theme with smooth animations and hover effects
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🛡️ **Error Handling** - Comprehensive error boundaries and fallback UI
- 🔄 **Loading States** - Skeleton loaders and smooth transitions

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.com) *(Add your deployment link here)*

## 📸 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400/000000/FFFFFF?text=Homepage+with+Movie+Rows)

### Authentication
![Authentication](https://via.placeholder.com/800x400/000000/FFFFFF?text=Google+Sign-In+Page)

### User Profile
![User Profile](https://via.placeholder.com/800x400/000000/FFFFFF?text=User+Profile+in+Header)

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1, Vite 7.1.3
- **Styling**: Tailwind CSS 4.1.12
- **Authentication**: Appwrite 19.0.0 with Google OAuth
- **API**: The Movie Database (TMDB) API
- **Icons**: Lucide React
- **Build Tool**: Vite with HMR

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Appwrite account
- Google Cloud Console project (for OAuth)
- TMDB API key

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/hostar-clone.git
cd hostar-clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:

```env
# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id_here

# TMDB API Key (Optional - uses demo key if not provided)
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### 4. Appwrite Setup
1. Create an account at [Appwrite Cloud](https://cloud.appwrite.io)
2. Create a new project
3. Enable Google OAuth in Authentication settings
4. Set redirect URI: `https://fra.cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/YOUR_PROJECT_ID`
5. Copy your Project ID to the `.env` file

### 5. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs from Appwrite
6. Copy Client ID and Secret to Appwrite

### 6. Run the Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see the application.

## 📁 Project Structure

```
hostar-clone/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Banner.jsx          # Hero section with movie showcase
│   │   ├── ErrorBoundary.jsx   # Error handling component
│   │   ├── Header.jsx          # Navigation with user authentication
│   │   ├── Main.jsx            # Main movie showcase section
│   │   ├── MovieRow.jsx        # Horizontal movie rows
│   │   └── OAuthCallback.jsx   # OAuth callback handler
│   ├── contexts/
│   │   └── AuthContext.jsx     # Authentication context
│   ├── lib/
│   │   └── appwrite.js         # Appwrite configuration
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies and scripts
├── README.md                   # Project documentation
└── SETUP.md                    # Detailed setup instructions
```

## 🎯 Key Components

### Authentication Flow
- **Google OAuth** integration via Appwrite
- **Protected routes** with automatic redirects
- **User session management** with persistent login
- **Error handling** for authentication failures

### Movie Data Integration
- **TMDB API** for real-time movie data
- **Multiple movie categories** (Now Playing, Popular, Top Rated)
- **Responsive movie rows** with horizontal scrolling
- **Loading states** and error fallbacks

### UI/UX Features
- **Dark theme** matching streaming platforms
- **Smooth animations** and hover effects
- **Responsive design** for all screen sizes
- **Loading skeletons** for better UX

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

### Other Platforms
The app can be deployed to any static hosting service that supports SPA routing.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the movie data API
- [Appwrite](https://appwrite.io/) for authentication services
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [Vite](https://vitejs.dev/) for the build tool

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub.

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/hostar-clone&type=Date)](https://star-history.com/#yourusername/hostar-clone&Date)

---

**Made with ❤️ by [Your Name](https://github.com/yourusername)**
