import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../redux/moviesSlice';
import { RootState } from '../redux/store';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    overview: string;
    poster_path?: string;
  };
  onPress: () => void;
}

export default function MovieCard({ movie, onPress }: MovieCardProps) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state: RootState) => state.movies.bookmarks);
  const isBookmarked = bookmarks.some(b => b.id === movie.id);

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {posterUrl && <Image source={{ uri: posterUrl }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview} numberOfLines={3}>
          {movie.overview}
        </Text>
        <TouchableOpacity
          onPress={() =>
            isBookmarked
              ? dispatch(removeBookmark(movie.id))
              : dispatch(addBookmark(movie))
          }
        >
          <Text style={styles.bookmark}>
            {isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E293B',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    padding: 8,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  overview: {
    color: '#9CA3AF',
    fontSize: 13,
  },
  bookmark: {
    color: '#38BDF8',
    fontWeight: '600',
    marginTop: 8,
  },
});
