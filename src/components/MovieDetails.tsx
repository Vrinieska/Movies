import React from 'react';
import {Text, View, FlatList} from 'react-native';
import currenyFormatter from 'currency-formatter';
import {Cast} from '../interfaces/creditInterface';
import {MovieFull} from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {ActorItem} from './ActorItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={{marginLeft: 8}}>
            {' '}
            - {movieFull.genres.map((m) => m.name).join(' ,')}
          </Text>
        </View>
        {/* Historia */}
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text>{movieFull.overview}</Text>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 25}}>
          {currenyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>

      {/* Casting */}
      <View style={{marginHorizontal: 25, marginBottom: 100}}>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: '600'}}>
          Actores
        </Text>
        {/* <ActorItem actor={cast[0]} /> */}

        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ActorItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 55}}
        />
      </View>
    </>
  );
};
