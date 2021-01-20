import { Actor } from './actor';

export interface Film {
  filmId: number;
  title: string;
  description: string;
  length: number;
  rating: string;
  releaseYear: number;
  actors: Actor[];
}
