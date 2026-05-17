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