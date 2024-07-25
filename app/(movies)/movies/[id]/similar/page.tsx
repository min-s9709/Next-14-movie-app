import { Suspense } from "react";
import MovieSimilar from "../../../../../components/Movie-similar";
import LoadingSpinner from "../../../../../components/LoadingSpinner";
import { IParams } from "../../../../../type";

export default function MovieSimilarPage({ params: { id } }: IParams) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MovieSimilar id={id} />
    </Suspense>
  );
}
