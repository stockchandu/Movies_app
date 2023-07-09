import "./movie.css";
import { useNavigate } from "react-router-dom";

export const MovieShowTemplate = ({ overview, poster_path, release_date, vote_count, vote_average, id, handleMovieDetails, path }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="movie__child" onClick={() => { handleMovieDetails(navigate, id, path) }}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie_poster" />
                </div>
                <div>
                    {overview.slice(0, 60) + ". . ."}
                </div>
                <div>
                    <span>Rating-{vote_average}</span>
                    <span>Year-{release_date.slice(0, 4)}</span>
                </div>
            </div>
        </>
    )
}


function add(a) {

    return function (b) {

        return function (c) {

            console.log(a + b + c)
        }
    }
}

add(2)(2)(4)

//8

// let abc = ["a","b","c"]

// reverse array


