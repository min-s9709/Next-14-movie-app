import styles from "../styles/movie-info.module.css";
import { IMovieInfo } from "../type";

export async function getMovie(id: string) {
  const json = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movies/${id}`
  ).then((response) => response.json())) as IMovieInfo;
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <div className={styles.category}>
          {movie.genres.map((g) => (
            <div>#{g.name}</div>
          ))}
        </div>
        <h3>★ {movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a className={styles.homepage} href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
