import React, { useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import { RootState, AppDispatch } from '../redux/store';
import MovieCard from '../components/MovieCard';

export default function HomeScreen({ navigation }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const { list, page, loading } = useSelector(
    (state: RootState) => state.movies,
  );

  useEffect(() => {
    dispatch(fetchMovies(1)); // Fetch first page on mount
  }, []);

  return (
    <FlatList
      contentContainerStyle={{ padding: 12 }}
      data={list}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          movie={item}
          onPress={() => navigation.navigate('Details', { movie: item })}
        />
      )}
      onEndReached={() => {
        if (!loading) dispatch(fetchMovies(page));
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  );
}
