class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Ironman", "Eon Productions", "PG-13");

// Example usage of the getPG method
const movies = [
    new Movie("Iron man", "Studio 1", "PG"),
    new Movie("Avengers", "Studio 2", "PG-13"),
    new Movie("Spiderman", "Studio 3", "PG"),
    new Movie("Captain america", "Studio 4", "R")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies); // Outputs the movies with rating "PG"
