import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../redux/moviesSlice';
import { RootState } from '../redux/store';

export default function MovieItem({ movie, onPress }: any) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((s: RootState) => s.movies.bookmarks);

  const isBookmarked = bookmarks.some(b => b.id === movie.id);

  return (
    <View style={{ padding: 12 }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{movie.title}</Text>
      </TouchableOpacity>

      <Text
        style={{ color: 'blue', marginTop: 4 }}
        onPress={() =>
          isBookmarked
            ? dispatch(removeBookmark(movie.id))
            : dispatch(addBookmark(movie))
        }
      >
        {isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
      </Text>
    </View>
  );
}
