import { useEffect, useState } from 'react'
import './movies.body.css'

type Movie = {
        title: string,
        episode_id: number,
        opening_crawl: string,
}

export const MoviesBody = () => {

    const [movies, setMovies] = useState<Movie[]>()
    
    useEffect(() => {
        fetch('https://swapi.dev/api/films')
        .then(response => response.json())
        .then(data => {
            setMovies(data.results);
        })
    }, [])


    return(
        <div className="body">
            <video className='star__video' autoPlay disablePictureInPicture muted loop> <source src='./././videos/slow_star_video.mp4' type='video/mp4'></source></video>
            
            <ul>
                {movies?.map(movie => {
                    return (
                        <li key={movie.title}>
                            <strong>
                                {movie.title}
                            </strong>
                            <p>
                                {movie.episode_id}
                            </p>
                            <p>
                                {movie.opening_crawl}
                            </p>
                            <button>Characters</button>
                            <button>Planets</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default MoviesBody