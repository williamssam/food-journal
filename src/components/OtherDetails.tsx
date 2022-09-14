import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Date from '../assets/icons/Date';
import Location from '../assets/icons/Location';
import Restaurant from '../assets/icons/Restaurant';
import {fonts} from '../theme/fonts';

const OtherDetails = () => {
  return (
    <View style={styles.otherDetails}>
      <View style={styles.otherDetail}>
        <Date />
        <Text style={styles.otherDetailText}>25 June 2022</Text>
      </View>
      <View style={styles.otherDetail}>
        <Location />
        <Text style={styles.otherDetailText}>Lagos, Nigeria</Text>
      </View>
      {/* <View style={styles.otherDetail}>
        <Restaurant />
        <Text style={styles.otherDetailText}>Breakfast</Text>
      </View> */}
      <View style={styles.otherDetail}>
        <Restaurant />
        <Text style={styles.otherDetailText}>Resturant</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otherDetails: {
    //  paddingBottom: 50,
    marginTop: 10,
  },
  otherDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  otherDetailText: {
    fontFamily: fonts.regular,
    fontSize: 17,
    marginLeft: 10,
  },
});
export default OtherDetails;
