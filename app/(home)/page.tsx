import Movie from "../../components/Movie";
import styles from "../../styles/home.module.css";
import { IMovies } from "../../type";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const json = (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`).then(
    (response) => response.json()
  )) as IMovies[];
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          id={String(movie.id)}
        />
      ))}
    </div>
  );
}
