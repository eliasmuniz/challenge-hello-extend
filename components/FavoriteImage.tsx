"use client";

import { useFavorites } from "../state/favorite";

const FavoriteImage = ({ src }: { src: string }) => {
    const [favorites, toggleFavorite] = useFavorites();
    const isFavorite = favorites.includes(src);

    return (
      <div className="relative">
        <img src={src} className="w-72 h-72 object-cover " alt="dog" />
        <button onClick={()=> toggleFavorite(src)} className={`w-6 h-6 absolute top-2 right-2 bg-white rounded-full flex items-center justify-center ${isFavorite ? 'text-yellow-600' : 'text-black'}`}>
         {isFavorite ? '★':'☆' }  
        </button>
      </div>
    );
  };

export default FavoriteImage;