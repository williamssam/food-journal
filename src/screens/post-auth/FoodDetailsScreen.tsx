import storage from '@react-native-firebase/storage'
import type {RouteProp} from '@react-navigation/native'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as React from 'react'
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import ArrowLeft from '../../assets/icons/ArrowLeft'
import ConfirmationModal from '../../components/ConfirmationModal'
import Dialog from '../../components/Dialog'
import OtherDetails from '../../components/OtherDetails'
import {FoodNavigationProps, RootStackParamList} from '../../models/navigators'
import {useGetOneMealQuery, useRemoveMealMutation} from '../../store/apiSlice'
import {colors} from '../../theme/colors'
import {fonts} from '../../theme/fonts'

const FoodDetailsScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>()
  const id = route?.params?.mealId
  const navigation = useNavigation<FoodNavigationProps>()
  const [toggleModal, setToggleModal] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const {isLoading, data} = useGetOneMealQuery(id)
  const [deleteMeal, {isLoading: isRemoveLoading}] = useRemoveMealMutation()

  const deleteItem = async () => {
    // @ts-ignore
    const uri: string = data?.image
    // cut filename out of the url returned by firebase
    const fileName = uri!.substring(
      uri!.lastIndexOf('image'),
      uri!.lastIndexOf('?'),
    )
    setLoading(true)
    try {
      await storage().ref(fileName).delete()
      await deleteMeal(id)

      console.log('image delete successfully')
      setLoading(false)
      navigation.push('Home')
    } catch (error) {
      console.error('error', error)
    }
  }

  if (isLoading) {
    return <ActivityIndicator color={colors.black} size="large" />
  }

  return (
    <>
      <ScrollView
        style={styles.detailsContainer}
        showsVerticalScrollIndicator={false}>
        <Pressable style={styles.goBackBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </Pressable>

        <View>
          <View>
            <Image
              source={{
                uri:
                  data?.image ??
                  'https://cdn.dribbble.com/users/143350/screenshots/14052412/media/27ab3785352e64f357bc1608bae74361.png?compress=1&resize=400x300',
              }}
              style={styles.image}
            />
            <View
              style={[styles.slideIndicator, {transform: [{translateX: -50}]}]}>
              <View style={styles.next} />
              <View style={styles.current} />
              <View style={styles.previous} />
            </View>
          </View>
          {/* <View style={styles.otherImageContainer}>
          <Image
            source={require('../assets/images/food.jpg')}
            style={styles.otherImage}
          />
          <Image
            source={require('../assets/images/food.jpg')}
            style={styles.otherImage}
          />
          <Image
            source={require('../assets/images/food.jpg')}
            style={styles.otherImage}
          />
        </View> */}

          <View style={styles.aboutFood}>
            <View>
              <View style={styles.tags}>
                <Pressable
                  style={({pressed}) => [{opacity: pressed ? 0.9 : 1}]}
                  onPress={() =>
                    navigation.navigate('FilterByType', {
                      mealType: data?.type,
                    })
                  }>
                  <Text style={styles.foodType}>{data?.type}</Text>
                </Pressable>
                {!data?.tags?.length && (
                  <View style={styles.tagContainer}>
                    {data?.tags?.map(tag => (
                      <Text style={styles.tag} key={tag}>
                        #{tag}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
              <Text style={styles.foodName}>{data?.name}</Text>
            </View>
            <Text style={styles.foodDescriptiion}>{data?.description}</Text>

            <OtherDetails data={data} />

            <View style={styles.btnContainer}>
              <Pressable
                android_ripple={{
                  color: colors.neutral,
                }}
                style={[styles.btn, styles.deleteBtn]}
                onPress={() => setToggleModal(true)}>
                <Text style={styles.btnText}>Delete</Text>
              </Pressable>
              {/*
                if this button is clicked, navigate to add food with its input field already prefilled with existing data
              */}
              <Pressable
                android_ripple={{
                  color: colors.neutral,
                }}
                style={[styles.btn, styles.editBtn]}
                onPress={() =>
                  navigation.navigate('AddMeal', {
                    meal: data,
                  })
                }>
                <Text style={styles.btnText}>Update</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* <Pressable style={styles.addFoodBtn}>
        <CirclePlus />
      </Pressable> */}
      </ScrollView>

      <Dialog
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        children={
          <ConfirmationModal
            title="Are you sure you want to delete this food from the list? 😒"
            setToggleModal={setToggleModal}
            loading={loading || isRemoveLoading}
            onPress={deleteItem}
          />
        }
      />
    </>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    // paddingTop: 30,
    flex: 1,
  },
  goBackBtn: {
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 100,
    backgroundColor: colors.neutral,
    borderRadius: 30,
  },
  image: {
    width: '100%',
    height: 400,
    // borderRadius: 30
  },
  aboutFood: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  foodName: {
    fontFamily: fonts.medium,
    color: colors.main,
    fontSize: 25,
    paddingTop: 10,
    lineHeight: 22,
  },
  foodDescriptiion: {
    fontFamily: fonts.regular,
    lineHeight: 24,
    fontSize: 16,
    paddingTop: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tags: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    fontFamily: fonts.regular,
    fontSize: 16,
    marginRight: 10,
    color: colors.secondary,
    // backgroundColor: 'rgba(0,0,0,0.5)'
  },
  foodType: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: colors.neutral,
    backgroundColor: colors.main,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginRight: 10,
  },
  slideIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
    left: '50%',
  },
  next: {
    width: 20,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 20,
  },
  previous: {
    width: 20,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 20,
  },
  current: {
    width: 50,
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    marginTop: 25,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    alignItems: 'center',
    minWidth: 100,
  },
  btnText: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.neutral,
  },
  deleteBtn: {
    backgroundColor: colors.secondary,
  },
  editBtn: {
    backgroundColor: colors.blue,
    marginLeft: 15,
  },
})
export default FoodDetailsScreen
