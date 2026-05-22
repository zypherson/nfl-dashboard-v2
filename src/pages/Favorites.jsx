import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites, dispatch } = useFavorites();

  if (!favorites.length) return <p>No favorites yet</p>;

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.map(player => (
        <div key={player.id}>
          {player.name}

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE",
                payload: player.id
              })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;