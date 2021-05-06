import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import "../styles/Favorite.css";
import { Link } from "react-router-dom";

const Favorite = () => {
  const { favorites, favoriteHandler } = useContext(MovieContext);

  return (
    <>
      {favorites?.length ? (
        <div className="favorites">
          {favorites.map((movie) => (
            <Link
              to={`movies/${movie.imdbID}`} /* Router.js dinamik path yapısıyla aynı olacak şekilde imdbID ile routing işlemini yapınız */
              className="text-link"
              key={movie.imdbID}
            >
              <Card
                key={movie.imdbID}
                image={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                addFavorite={(e) => favoriteHandler(movie, e)}
                isFavorite={movie.isFavorite}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="favorite_warning"> There is no favorite movie.</div>
      )}
    </>
  );
};

export default Favorite;
