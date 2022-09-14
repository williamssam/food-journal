import {StyleSheet} from 'react-native'
import {colors} from './colors'
import {fonts} from './fonts'

export const globalStyle = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    flex: 1,
  },
  btn: {
    backgroundColor: colors.main,
    padding: 18,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.neutral,
  },
})
