import { logDOM } from "@testing-library/react";
import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const MovieItem = ({ movie, setShow }) => {
  const BACKGROUND_IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";
  return (
    <div className="sm:h-[474px] h-[auto] sm:w-[583px] w-[80%] flex items-start justify-center bg-white">
      <div className="w-[90%] flex-col items-center justify-center py-[20px]">
        <header className="flex justify-between items-center w-full mb-[16px]">
          <h4
            className="font-bold"
            style={{
              fontSize: "18px",
            }}
          >
            {movie.title}
          </h4>
          <AiOutlineCloseSquare
            style={{
              color: "#141E35",
              height: "20px",
              width: "20px",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              setShow(false);
            }}
          />
        </header>
        <div className="sm:flex justify-between items-start">
          <img
            src={`${BACKGROUND_IMAGE_PATH}${movie.backdrop_path}`}
            alt="poster"
            className="sm:h-[389px] h-[200px] sm:w-[266px] w-full sm:mb-0 mb-3 object-fill"
          />
          <div
            className="flex-col sm:ml-[22px]"
            style={{ fontSize: "14px", fontFamily: "Inter" }}
          >
            <h6 className="flex mb-[16px]">
              <p className="font-semibold">Release Date:</p>
              {movie.release_date}
            </h6>
            <span className="font-mediu" style={{ lineHeight: "17px" }}>
              {movie.overview}
            </span>
            <span className="flex mt-[16px]">
              <p className="font-bold">
                {Math.floor((movie.popularity / 4000) * 10)}
              </p>
              /10 ({Math.floor(movie.popularity)} total votes)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
