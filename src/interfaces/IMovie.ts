import { IVideos } from "./IVideo";

export interface IGenres {
  id?: string;
  name?: string;
}
export interface IMovie {
  adult?: boolean;
  backdrop_path?: string | null;
  genres?: IGenres[];
	genres_ids?: IGenres[];
  id?: number;
  original_lang?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  release_date?: string;
  title?: string;
  video?: boolean;
  videos?: IVideos;
  vote_count?: number;
  vote_average?: number;
}

export type MovieProp = {
  movie?: IMovie;
  movies?: IMovie[];
};
