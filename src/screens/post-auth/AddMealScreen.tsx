import {yupResolver} from '@hookform/resolvers/yup'
import {useNavigation} from '@react-navigation/native'
import * as React from 'react'
import {useForm} from 'react-hook-form'
import {
  ActivityIndicator,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import * as yup from 'yup'
import Upload from '../../assets/icons/Upload'
import Dialog from '../../components/Dialog'
import ImagePickerModal from '../../components/ImagePickerModal'
import Input from '../../components/Input'
import {FoodNavigationProps} from '../../models/navigators'
import {PickerResponseType} from '../../models/screenTypes'
import {useAddMealMutation} from '../../store/apiSlice'
import {colors} from '../../theme/colors'
import {fonts} from '../../theme/fonts'
import {globalStyle} from '../../theme/globalStyle'

import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import BottomTab from '../../components/BottomTab'
import {Food} from '../../models/food'

const schema = yup.object({
  name: yup.string().required('Meal name is required'),
  type: yup.string().required('Meal type is required'),
  description: yup.string().required('Meal description is required'),
  location: yup.string().required('Location is required'),
  restaurant: yup.string().required('Restaurant is required'),
})

type FormFields = {
  name: string
  type: string
  time: string
  image: string
  description: string
  location: string
  restaurant: string
}

const AddMealScreen = () => {
  const navigation = useNavigation<FoodNavigationProps>()
  const [toggleModal, setToggleModal] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [pickerResponse, setPickerResponse] =
    React.useState<PickerResponseType | null>(null)
  const [addMeal, {isLoading, status, isError, data}] = useAddMealMutation()

  const {control, handleSubmit, reset} = useForm({
    resolver: yupResolver(schema),
  })

  // console.log()

  console.table(status, isError, data)
  console.log(typeof status)

  /*
    steps to upload image
    - let user select image from the libary or their camera
    - when user click 'add meal', first upload image to firebase storage then pick the download url and add that to the database
    - then save the data into firebase
  */

  const onAddFood = async (data: any) => {
    const {description, type, name, location, restaurant} = data
    if (!pickerResponse) {
      ToastAndroid.show(
        'Please upload meal image to continue',
        ToastAndroid.SHORT,
      )
      return
    }

    // remove all the file path name prefix and get just the file name with the extension
    const filename = pickerResponse?.uri.substring(
      pickerResponse?.uri.lastIndexOf('/') + 1,
    )
    const uploadUri =
      Platform.OS === 'ios'
        ? pickerResponse?.uri.replace('file://', '')
        : pickerResponse?.uri
    setLoading(true)
    try {
      const task = await storage().ref(filename)
      // used non null assertion: just to tell ts that we know "uploadUri" can never be undefined || null
      const uploadFile = await task.putFile(uploadUri!)
      const downloadUrl = await task.getDownloadURL()
      const meal: Food = {
        description,
        image: downloadUrl,
        restaurant,
        location,
        name,
        type,
        date: firestore.Timestamp.now(),
      }
      if (uploadFile) {
        await addMeal(meal)
      }
      // if (isSuccess) {
      //
      // }
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    if (status === 'fulfilled') {
      ToastAndroid.show('Meal added successfully! 🎉🚀', ToastAndroid.SHORT)
      reset()
      setPickerResponse(null)
      navigation.push('Tab')
    }
  }, [status])

  return (
    <>
      <KeyboardAwareScrollView
        style={globalStyle.container}
        showsVerticalScrollIndicator={false}>
        {/* upload field */}
        <View>
          <Pressable
            style={({pressed}) => [
              {
                opacity: pressed ? 0.9 : 1,
              },
              styles.uploadContainer,
            ]}
            onPress={() => setToggleModal(true)}>
            {pickerResponse ? (
              <Image
                style={{
                  width: '100%',
                  height: 200,
                  resizeMode: 'contain',
                }}
                source={{uri: pickerResponse?.uri}}
              />
            ) : (
              <>
                <Upload />
                <Text style={styles.uploadText}>Upload picture</Text>
                <Text style={styles.uploadTextSubtitle}>
                  Photos must be less than 2mb in size
                </Text>
              </>
            )}
          </Pressable>

          <Pressable
            style={styles.uploadBtn}
            onPress={() => setToggleModal(true)}>
            <Text style={styles.uploadBtnText}>Select Image</Text>
          </Pressable>
        </View>

        <View style={styles.formContainer}>
          <Input
            title="Name"
            placeholder="Enter name of the food"
            name="name"
            control={control}
          />
          {/* TODO: change to select */}
          <Input
            title="Type"
            placeholder="Breakfast, Lunch, Dinner etc"
            name="type"
            control={control}
          />
          <View>
            <Input title="Location" name="location" control={control} />
            <Text>Auto choose my location</Text>
          </View>
          <Input title="Restaurant" name="restaurant" control={control} />

          <Input
            title="Description"
            placeholder="Add description to the photo (100Char limit)"
            multiline
            name="description"
            control={control}
          />
          {/* <TextInput style={[styles.input, styles.textArea]} placeholder="" /> */}

          <Pressable
            onPress={handleSubmit(onAddFood)}
            android_ripple={{
              color: colors.neutral,
            }}
            style={styles.submitBtn}>
            {isLoading || loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.submitBtnText}>Add food</Text>
            )}
          </Pressable>
        </View>
      </KeyboardAwareScrollView>

      <Dialog
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        children={
          <ImagePickerModal
            setToggleModal={setToggleModal}
            // pickerResponse={pickerResponse}
            setPickerResponse={setPickerResponse}
          />
        }
      />

      <BottomTab />
    </>
  )
}

const styles = StyleSheet.create({
  uploadContainer: {
    backgroundColor: colors.main,
    height: 200,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  uploadText: {
    color: colors.neutral,
    fontFamily: fonts.medium,
    fontSize: 24,
  },
  uploadTextSubtitle: {
    color: colors.neutral,
    paddingTop: 10,
  },
  formContainer: {
    marginTop: 15,
  },
  submitBtn: {
    marginTop: 20,
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    // alignSelf: 'flex-start',
    alignItems: 'center',
    minWidth: 100,
    backgroundColor: colors.main,
    borderRadius: 5,
  },
  submitBtnText: {
    fontFamily: fonts.medium,
    color: colors.neutral,
    fontSize: 20,
    textTransform: 'uppercase',
  },
  uploadBtn: {
    marginTop: -25,
    backgroundColor: '#979797',
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignSelf: 'center',
    borderRadius: 15,
  },
  uploadBtnText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.neutral,
  },
})

export default AddMealScreen
