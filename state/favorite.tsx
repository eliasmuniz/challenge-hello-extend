import { createContext, useContext, useState } from "react";

interface Context {
  state: {
    favorites: string[];
  };
  actions: {
    toggleFavorite: (image: string) => void;
  };
}

// Context for store the state
const FavoriteContext = createContext({} as Context);

interface Props {
  children: React.ReactNode;
}

// Provider to bring favorites
const FavoriteProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  function toggleFavorite(image: string) {
    if (favorites.includes(image)) {
      setFavorites((favorites) =>
        favorites.filter((favorite) => favorite !== image)
      );
    } else {
      setFavorites((favorites) => [...favorites, image]);
    }
  }

  const state = {
    favorites,
  };

  const actions = {
    toggleFavorite,
  };

  return (
    <FavoriteContext.Provider
      value={{
        state: { favorites },
        actions: { toggleFavorite },
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

// Hook for have access to context
function useFavorites(): [Context["state"]["favorites"], Context["actions"]["toggleFavorite"]] {
  const { state, actions } = useContext(FavoriteContext);

  return [state.favorites, actions.toggleFavorite];
}

export { FavoriteProvider, useFavorites };
