import {useState} from 'react'

const genres = ['animation', 'classic', 'comedy','drama', 'horror', 'family', 'mystery']

function Movies() {
    const [movieList, setMovieList] = useState()
    const getMovies = (genre) => {
        fetch(`https://api.sampleapis.com/movies/${genre}`)
            .then(response => response.json())
            .then(setMovieList)
            .catch(console.error)
    }
    return (
        <>
        <div className='button-list'>
            {genres.map(genre => (
                <button key={genre} onClick={() => getMovies(genre)}>
                    {genre.toUpperCase()}
                    </button>
            ))}
        </div>
        <div className='movie-list'>
            {!movieList
                ? <p>Pick a Genre, any Genre!</p>
                : movieList.map(movie => {
                <p key={movie.id}>{movie.title}</p>
            })}
        </div>
        
        </>
    )

}

export default Movies