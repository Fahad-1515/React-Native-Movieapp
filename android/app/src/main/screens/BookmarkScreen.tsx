import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import MovieCard from '../components/MovieCard';

export default function BookmarkScreen({ navigation }: any) {
  const bookmarks = useSelector((state: RootState) => state.movies.bookmarks);

  if (!bookmarks.length) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#E5E7EB' }}>No bookmarks yet</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={{ padding: 12 }}
      data={bookmarks}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          movie={item}
          onPress={() => navigation.navigate('Details', { movie: item })}
        />
      )}
    />
  );
}
