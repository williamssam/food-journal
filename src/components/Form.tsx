import * as React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Filter from '../assets/icons/Filter';
import Search from '../assets/icons/Search';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

const Form = () => {
  return (
    <View style={styles.formField}>
      <View style={styles.searchForm}>
        <Search />
        <TextInput style={styles.searchInput} />
      </View>
      <Pressable style={styles.filterBtn}>
        <Filter />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  formField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  searchForm: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 13,
    flex: 1,
  },
  searchInput: {
    backgroundColor: colors.neutral,
    left: 0,
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    padding: 12,
    borderRadius: 15,
    paddingLeft: 45,
    fontFamily: fonts.regular,
    fontSize: 18,
    color: colors.main,
  },
  filterBtn: {
    backgroundColor: colors.secondary,
    padding: 12,
    borderRadius: 15,
  },
});

export default Form;
