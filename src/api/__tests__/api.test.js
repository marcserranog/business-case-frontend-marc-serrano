import { fetchMoviesByCategory } from '../api';  
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();  

beforeEach(() => {
  fetchMock.resetMocks();  
});

describe('fetchMoviesByCategory', () => {
  it('should return movies when fetch is successful', async () => {
    const mockResponse = {
      results: [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }]
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));  

    const movies = await fetchMoviesByCategory('popular');
    expect(movies).toEqual(mockResponse.results);
    expect(fetchMock).toHaveBeenCalledTimes(1);  
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/movie/popular?api_key=undefined&language=en-US&page=1'
    );  
  });

  it('should return an empty array when fetch fails', async () => {
    fetchMock.mockRejectOnce(new Error('Failed to fetch movies'));  
  });
});
