import Movie from "./Movie";
import styles from "../styles/home.module.css";
import { IMovies } from "../type";

export async function getSimilarMovies(id) {
  const json = (await fetch(`
    ${process.env.NEXT_PUBLIC_API_URL}/movies/${id}/similar
`).then((response) => response.json())) as IMovies[];
  return json;
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similarMovies = await getSimilarMovies(id);
  return (
    <div className={styles.container}>
      {similarMovies.map((similarMovie) => (
        <Movie
          key={similarMovie.id}
          title={similarMovie.title}
          poster_path={similarMovie.poster_path}
          id={String(similarMovie.id)}
        />
      ))}
    </div>
  );
}
