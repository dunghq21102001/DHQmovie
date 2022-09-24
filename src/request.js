const key = 'f0ad1e71f8fc29fc75cff6a715b62d74'

export const request =
{
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRate: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestHorrorMovies: `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=horror&page=1`
}
