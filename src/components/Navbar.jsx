import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#111827",
        color: "white"
      }}
    >
      <h1>NFL Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "1rem"
        }}
      >
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/compare"
          style={{ color: "white", textDecoration: "none" }}
        >
          Compare
        </Link>

        <Link
          to="/favorites"
          style={{ color: "white", textDecoration: "none" }}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;