import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/Movie-info";
import MovieMenuTab from "../../../../components/Movie-menu";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { IParams } from "../../../../type";

interface IDetailLayout extends IParams {
  children: React.ReactNode;
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}
export default function MovieDetailLayout({
  params: { id },
  children,
}: IDetailLayout) {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <MovieInfo id={id} />
      </Suspense>
      <MovieMenuTab id={id} />
      {children}
    </div>
  );
}
