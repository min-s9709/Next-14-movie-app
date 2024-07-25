import styles from "../styles/movie-videos.module.css";
import { IVideo } from "../type";

async function getVideos(id: string) {
  const json = (await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movies/${id}/videos`
  ).then((response) => response.json())) as IVideo[];
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
