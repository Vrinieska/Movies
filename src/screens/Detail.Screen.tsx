import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {MovieDetails} from '../components/MovieDetails';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  useMovieDetails(movie.id);

  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);
  console.log(movieFull);

  return (
    <ScrollView>
      <View style={styles.imagecontainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.subTitle}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={40} color="green" style={{marginTop: 30}} />
      ) : (
        <MovieDetails movieFull={movieFull} cast={cast} />
      )}

      {/* Boton para cerrar*/}

      <TouchableOpacity style={styles.backbtn} onPress={() => navigation.pop()}>
        <Icon color="gray" name="ios-arrow-back-outline" size={50} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imagecontainer: {
    backgroundColor: 'green',
    // overflow: 'hidden',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    elevation: 9,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    opacity: 0.4,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backbtn: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});
