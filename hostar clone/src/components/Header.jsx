
import {House,Search,Monitor,Popcorn,Volleyball,Projector,LayoutPanelLeft,UserPen} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Header(){
   const[isActive,setIsActive]=useState(null);
   const { user, loginWithGoogle, logout, loading, error } = useAuth();
   const Icons=
    [
    { Icon: House, label: "Home", id: "home" },
    { Icon: Search, label: "Search", id: "search" },
    { Icon: Monitor, label: "TV", id: "tv" },
    { Icon: Popcorn, label: "Movies", id: "movies" },
    { Icon: Volleyball, label: "Sports", id: "sports" },
    { Icon: Projector, label: "Disney+", id: "disney" },
    { Icon: LayoutPanelLeft, label: "Categories", id: "categories" },
    { Icon: UserPen, label: "My Space", id: "myspace" }
  ];

   return(
    <div>
    <div className="main h-screen w-24 fixed  top-0 left-0 hover:w-[70%]">

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none z-0"></div>

      <div className="icon-list group text-white flex flex-col gap-8 transition-all duration-300 ease-in-out">
         <div className="logo py-8 mb-28 w-24 z-50">
            <img src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png"></img>
         </div>
         {Icons.map(({Icon,label},index)=>(
            <div className={`flex items-center gap-4 px-4 text-gray-500 hover:text-white cursor-pointer ${isActive===index? "text-white":"text-gray-500 z-50"}`} key={index}
            onClick={()=>setIsActive(index)}>
            <span><Icon /></span>
            <span className="hidden group-hover:inline">{label}</span>
            </div>
         ))}
         
         {/* User Authentication Section */}
         <div className="mt-auto px-4 py-4 border-t border-gray-700">
           {loading ? (
             <div className="text-gray-500 text-sm">Loading...</div>
           ) : user ? (
             <div className="text-white">
               {/* User Profile Section */}
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-sm font-semibold">
                   {user.name ? user.name.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase() || 'U'}
                 </div>
                 <div className="flex-1 min-w-0">
                   <div className="text-sm text-gray-400">Welcome,</div>
                   <div className="font-semibold truncate text-sm">
                     {user.name || user.email || 'User'}
                   </div>
                 </div>
               </div>
               
               {/* Sign Out Button */}
               <button 
                 onClick={logout}
                 className="w-full text-xs text-red-400 hover:text-red-300 transition-colors bg-red-900/20 hover:bg-red-900/30 px-2 py-1 rounded"
               >
                 Sign Out
               </button>
               
               {/* Error Display */}
               {error && (
                 <div className="mt-2 text-xs text-red-400 bg-red-900/20 p-2 rounded">
                   {error}
                 </div>
               )}
             </div>
           ) : (
             <div>
               <button 
                 onClick={loginWithGoogle}
                 disabled={loading}
                 className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-3 py-2 rounded text-sm font-semibold transition-colors"
               >
                 {loading ? 'Signing in...' : 'Sign In with Google'}
               </button>
               
               {/* Error Display */}
               {error && (
                 <div className="mt-2 text-xs text-red-400 bg-red-900/20 p-2 rounded">
                   {error}
                 </div>
               )}
             </div>
           )}
         </div>
         
      </div>
    </div>
    </div>
   );
}


