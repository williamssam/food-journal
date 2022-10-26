import {useNavigation, useRoute} from '@react-navigation/native'
import * as React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import AddImage from '../assets/icons/AddImage'
import Home from '../assets/icons/Home'
import Setting from '../assets/icons/Setting'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'

const BottomTab = () => {
  const [active, setActive] = React.useState('Home')
  const navigation = useNavigation()
  const route = useRoute()

  const tabs = [
    {
      id: 1,
      name: 'Home',
      link: 'Home',
    },
    {
      id: 2,
      name: 'Add Meal',
      link: 'AddMeal',
    },
    {
      id: 3,
      name: 'Settings',
      link: 'Setting',
    },
  ]

  // TODO: change type
  const handleClick = (link: never | string) => {
    setActive(route.name)
    navigation.navigate(link)
  }

  React.useEffect(() => {
    setActive(route.name)
  }, [])

  return (
    <View style={styles.bottomTabContainer}>
      {tabs?.map(({id, name, link}) => (
        <Pressable
          onPress={() => handleClick(link)}
          style={[
            styles.bottomTabBtn,
            {
              backgroundColor: active === link ? colors.neutral : colors.main,
              paddingVertical: active === link ? 8 : 0,
            },
          ]}
          key={id}>
          {name === 'Home' ? (
            <Home fill={active === link ? colors.main : colors.neutral} />
          ) : name === 'Settings' ? (
            <Setting fill={active === link ? colors.main : colors.neutral} />
          ) : (
            <AddImage fill={active === link ? colors.main : colors.neutral} />
          )}
          <Text
            style={[
              styles.bottomTabText,
              {color: active === link ? colors.main : colors.neutral},
            ]}>
            {name}
          </Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  bottomTabContainer: {
    backgroundColor: colors.main,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 10,
    // position: 'relative',
    // bottom: 8,
  },
  bottomTabBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingRight: 13,
  },
  bottomTabText: {
    color: colors.neutral,
    fontFamily: fonts.medium,
    marginLeft: 8,
  },
})
export default BottomTab
