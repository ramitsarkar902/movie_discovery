import React from "react";

const MovieCard = ({ movie, selectMovie, setShow }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        selectMovie(movie);
        setShow(true);
      }}
      style={{
        height: "348px",
        width: "282px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        border: "1px solid #E1E3E6",
        boxShadow: "1px 2px 8px 2px #0000001A",
        "&:hover": {
          transform: "scale(0.5)",
        },
      }}
    >
      {movie.poster_path ? (
        <img
          className={"movie-cover"}
          src={`${IMAGE_PATH}${movie.poster_path}`}
          alt=""
          style={{
            height: "302px",
            width: "100%",
            borderRadius: "1px",
            objectFit: "cover",
          }}
        />
      ) : (
        <div>No Image Found</div>
      )}
      <h5
        style={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineGeight: "26px",
          marginTop: "10px",
        }}
      >
        {movie.title}
      </h5>
    </div>
  );
};

export default MovieCard;
