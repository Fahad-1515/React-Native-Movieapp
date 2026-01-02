import React from 'react';
import { View, Text } from 'react-native';

export default function MovieDetailScreen({ route }: any) {
  const { movie } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{movie.title}</Text>
      <Text style={{ marginTop: 8 }}>{movie.overview}</Text>
    </View>
  );
}
