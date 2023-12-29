import { API_KEY } from '../constants/constant'

export const Originals = `discover/movie?api_key=${API_KEY}&with_genres=12`;
export const Actions = `discover/movie?api_key=${API_KEY}&with_genres=28`;
export const Trending = `trending/all/week?api_key=${API_KEY}&language=en-US`
export const TopRated = `movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const Fantasy = `discover/movie?api_key=${API_KEY}&with_genres=14`;
export const Mystery = `discover/movie?api_key=${API_KEY}&with_genres=9648`;
export const Family = `discover/movie?api_key=${API_KEY}&with_genres=10751`;
export const ScienceFriction = `discover/movie?api_key=${API_KEY}&with_genres=878`;
export const image_url='https://image.tmdb.org/t/p/original'