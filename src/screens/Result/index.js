import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} from 'react-native';

const Result = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../img/Encyclopedia.png')}>
      {data ? (
        <>
          <Text style={styles.heading}>Result</Text>
          <Image style={styles.img} source={{uri: data?.image}}></Image>
          <Text style={styles.sname}>{data?.name}</Text>
          <Text style={styles.scname}>{data?.scientificName}</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.dheading}>Description</Text>
          <Text style={styles.dparagraph}>{data?.description}</Text>
          <View style={styles.lineStyle} />
          <Text style={styles.dheading}>First Aid</Text>
          <Text style={styles.dparagraph}>{data?.firstAid}</Text>
        </>
      ) : (
        <View style={styles.notFoundView}>
          <Text style={styles.notFoundTxt}>Not Found!</Text>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: '8%',
  },

  img: {
    width: '45%',
    height: '20%',
    marginTop: '8%',
    marginLeft: '8%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  sname: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '58%',
    marginTop: '30%',
    color: 'black',
    position: 'absolute',
  },
  scname: {
    fontSize: 15,
    marginLeft: '5%',
    color: '#4EA582',
    marginLeft: '58%',
    marginTop: '50%',
    fontStyle: 'italic',
    position: 'absolute',
  },

  lineStyle: {
    borderWidth: 0.8,
    borderColor: 'black',
    margin: 20,
  },

  dheading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },

  dparagraph: {
    textAlign: 'justify',
    color: 'black',
    fontSize: 13,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
  },

  notFoundView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },

  notFoundTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  }
});

export default Result;
