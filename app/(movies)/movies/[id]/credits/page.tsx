import { Suspense } from "react";
import MovieCredits from "../../../../../components/Movie-credits";
import LoadingSpinner from "../../../../../components/LoadingSpinner";
import { IParams } from "../../../../../type";

export default function MovieCreditsPage({ params: { id } }: IParams) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MovieCredits id={id} />
    </Suspense>
  );
}
