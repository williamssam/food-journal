import * as React from 'react'
import {useForm} from 'react-hook-form'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Upload from '../assets/icons/Upload'
import Dialog from '../components/Dialog'
import ImagePickerModal from '../components/ImagePickerModal'
import Input from '../components/Input'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'
import {globalStyle} from '../theme/globalStyle'

const AddMealScreen = () => {
  const [toggleModal, setToggleModal] = React.useState(false)
  const [pickerResponse, setPickerResponse] = React.useState<string | null>(
    null,
  )

  const {
    register,
    handleSubmit,
    control,
    formState: {},
  } = useForm()

  const onAddFood = data => {
    console.log('form-data', data)
  }

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
            <Upload />
            <Text style={styles.uploadText}>Upload picture</Text>
            <Text style={styles.uploadTextSubtitle}>
              Photos must be less than 2mb in size
            </Text>
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
            name="meal_name"
            control={control}
          />
          <Input
            title="Type"
            placeholder="Breavage, Fruits etc"
            name="meal_type"
            control={control}
          />
          <Input
            title="Meal Time"
            placeholder="Breakfast, Lunch, Dinner etc"
            name="meal_time"
            control={control}
          />
          <Input title="Image URL" name="meal_image" control={control} />
          <Input
            title="Description"
            placeholder="Add description to the photo (100Char limit)"
            multiline
            name="meal_description"
            control={control}
          />

          {/* <TextInput style={[styles.input, styles.textArea]} placeholder="" /> */}

          <Pressable
            onPress={handleSubmit(onAddFood)}
            android_ripple={{
              color: colors.neutral,
            }}
            style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Add food</Text>
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
  formControl: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#ddd',
    paddingHorizontal: 15,
    height: 60,
    marginTop: 8,
    fontFamily: fonts.medium,
    fontSize: 16,
    borderRadius: 7,
  },
  inputLabel: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: colors.main,
  },
  textArea: {
    height: 150,
    // alignSelf: 'flex-start'
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
