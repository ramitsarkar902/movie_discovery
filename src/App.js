import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieItem from "./components/MovieItem";

function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "502709b57a68d03a1d751fc801b2b4ea";
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchKey, setSearchKey] = useState("");
  const [show, setShow] = useState(false);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies(searchKey);
  }, [searchKey]);

  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        selectMovie={setSelectedMovie}
        setShow={setShow}
      />
    ));

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="app">
      <div className="app__wrapper">
        <div
          style={{
            position: "sticky",
            top: 0,
            background: `${show ? "#fff" : "#fff"}`,
            display: "flex",
            flexDirection: "column",
            paddingBottom: "10px",
          }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "54px",
              background: "#fff",
            }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/c8b1/dd76/8a1b048be07f36d1c85d1b3691ec0aa2?Expires=1672012800&Signature=pXJJc8~IxwzInXiWz5k~qU4nI2DZsJuspEDTth216y2LEm~6x51wtzloQI2T3VlBdiG6D3hh~0HSQjrvaFkMjdugQwyAGJBpFBr4ecCx-DflBus5DcCIbFjIljmNlKDNZoSO-byjiHpA635xNKB2-rdM-VUB4HpKu5Nfjg-DMB3NdWABBx5lete9Cd6vLWQf0ahAHafqTK7BLEd8TKXEnz3tIXOeDWDHI6cTFQk0ZrTnBk4EZbCoSEu6NTWxN1fIIyA7zlonso65o1-RhgKOCQS6K6pa-06lCwVMrh38cNQRY0jBmIWbEcq-E0LyADSW~rMYmBuBwGC-0P2S45f6Zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              style={{
                height: "54px",
                width: "156px",
                left: "121px",
                top: "11px",
                borderRadius: "10px",
                boxShadow: "0px 4px 4px 0px #00000040",
                marginTop: "11px",
                objectFit: "cover",
              }}
            />

            <form
              onSubmit={searchMovies}
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "36px",
                justifyContent: "flex-start",
                width: "180px",
                borderRadius: "2px",
                padding: "10px",
                border: "1px solid #C0C4CC",
                overflow: "hidden",
              }}
            >
              <AiOutlineSearch
                style={{
                  height: "13.666666030883789px",
                  width: "13.666666030883789px",
                  borderRadius: "0px",
                  zIndex: "20",
                  color: "#898E9A",
                }}
              />
              <input
                type={"text"}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Search for a movie"
                style={{
                  width: "104px",
                  height: "15px",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "15px",
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "-0.01em",
                  color: "#898E9A",
                }}
              />
            </form>
          </header>
          <div
            style={{
              width: "100%",
              background: "#C0C4CC",
              height: "1px",
              marginTop: "12px",
            }}
          ></div>
          {show && (
            <div
              style={{
                background: "#000000B2",
                top: "65px",
                position: "absolute",
                height: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MovieItem movie={selectedMovie} setShow={setShow} />
            </div>
          )}
        </div>
        <div
          className="movie__wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h5
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "28px",
              margin: "37px 0px 23px 0px",
            }}
          >
            Most Recent Movies
          </h5>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "27px",
            }}
          >
            {renderMovies()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
