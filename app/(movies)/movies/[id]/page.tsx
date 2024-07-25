import { Suspense } from "react";
import MovieVideos from "../../../../components/Movie-videos";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import { IParams } from "../../../../type";

export default function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MovieVideos id={id} />
    </Suspense>
  );
}
