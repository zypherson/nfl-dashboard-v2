/* eslint-disable no-unused-vars */
import {
  createContext,
  useContext,
  useReducer,
  useEffect
} from "react";

const FavoritesContext = createContext();

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (state.favorites.find(p => p.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    case "REMOVE":
      return {
        ...state,
        favorites: state.favorites.filter(
          p => p.id !== action.payload
        )
      };

    default:
      return state;
  }
}

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(state.favorites)
    );
  }, [state.favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        dispatch
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => useContext(FavoritesContext);