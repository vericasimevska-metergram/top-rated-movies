import { Movie } from './Movie.js'

export function AllMovies({ movies }) {

    const filterAndSort = (movies) => {
        return movies.filter(movie => movie.year > 2000).sort((a, b) => b.year - a.year)
    }

    return (
        filterAndSort(movies).map((movie) => (
            <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.image}
                rating={movie.imDbRating}
                year={movie.year}
            />

        ))
    );
}