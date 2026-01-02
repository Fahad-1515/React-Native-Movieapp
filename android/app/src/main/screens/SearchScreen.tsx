import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchMovies, setSearchQuery } from '../redux/moviesSlice';
import { RootState, AppDispatch } from '../redux/store';
import MovieCard from '../components/MovieCard';

export default function SearchScreen({ navigation }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const { list, page, searchQuery, loading } = useSelector(
    (state: RootState) => state.movies,
  );
  const [input, setInput] = useState(searchQuery);

  useEffect(() => {
    // Fetch first page when searchQuery changes
    if (input.trim()) {
      dispatch(fetchSearchMovies({ query: input, page: 1 }));
    }
  }, [input]);

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <TextInput
        placeholder="Search movies"
        value={input}
        onChangeText={text => {
          setInput(text);
          dispatch(setSearchQuery(text));
        }}
        style={{
          backgroundColor: '#1E293B',
          color: '#E5E7EB',
          padding: 10,
          borderRadius: 8,
          marginBottom: 12,
        }}
      />

      <FlatList
        data={list}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate('Details', { movie: item })}
          />
        )}
        onEndReached={() => {
          if (!loading && input.trim()) {
            dispatch(fetchSearchMovies({ query: input, page }));
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
      />
    </View>
  );
}
