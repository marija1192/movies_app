
export interface IMovie {
	adult?: boolean;
	backdrop_path?: string | null;
	genres_ids?: number[];
	id?: number;
    original_lang?: string;
    original_title?: string;
	overview?: string | null;
	popularity?: number;
	poster_path?: string | null;
	release_date?: string;
	title?: string;
    video?: boolean;
	vote_count?: number;
	vote_average?: number;
}

export type MovieProp = {
	movie?: IMovie;
	movies?: IMovie[];
};