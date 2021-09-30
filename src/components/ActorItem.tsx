import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditInterface';

interface Props {
  actor: Cast;
}

export const ActorItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: '400'}}>{actor.name}</Text>
        <Text style={{fontSize: 16, fontWeight: '200'}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginLeft: 15,
    paddingRight: 15,


  },
  actorInfo: {
    marginLeft: 10,
    paddingTop: 5,
  },
});
