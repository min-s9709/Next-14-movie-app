import styles from "../styles/movie-credits.module.css";
import { ICredit } from "../type";

async function getCredits(id: string) {
  const json = (await fetch(`
        ${process.env.NEXT_PUBLIC_API_URL}/movies/${id}/credits
    `).then((response) => response.json())) as ICredit[];
  return json;
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      <div className={styles.creditcontainer}>
        {credits.map((credit) => (
          <div className={styles.credit} key={credit.id}>
            {credit.profile_path ? (
              <img src={credit.profile_path} alt={credit.name} />
            ) : (
              <div className={styles.noImg} />
            )}
            <h5>{credit.original_name}</h5>
            <h5>{credit.character}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
