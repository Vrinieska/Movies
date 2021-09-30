import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MovieCard} from '../components/MovieCard';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      style={{
        height: title ? 230 : 200,
      }}>
      {title && (
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MovieCard movie={item} width={120} height={160} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
