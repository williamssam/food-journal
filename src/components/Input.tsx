/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {Control, FieldError, FieldValues, useController} from 'react-hook-form'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native'
import {Eye, EyeOff} from '../assets/icons/Eye'
import Info from '../assets/icons/Info'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'

interface InputType extends TextInputProps {
  title: string
  placeholder?: string
  type?: string
  name: string
  control: Control<FieldValues, any>
  error?: FieldError
  setTogglePassword?: React.Dispatch<React.SetStateAction<boolean>>
  togglePassword?: boolean
}

const Input = ({
  title,
  placeholder,
  type,
  name,
  control,
  setTogglePassword,
  togglePassword,
  ...props
}: InputType) => {
  const [focusColor, setFocusColor] = React.useState(false)
  const {
    field: {value, onChange},
    fieldState: {error},
  } = useController({
    name,
    control,
    // defaultValue: '',
  })

  return (
    <>
      <View
        style={[
          styles.formControl,
          {
            borderColor: value
              ? colors.blue
              : error?.message
              ? colors.red
              : '#ced4da',
            borderWidth: value || focusColor ? 2.6 : 1.5,
          },
        ]}>
        <Text style={styles.inputLabel}>{title}</Text>
        <TextInput
          value={value}
          style={styles.input}
          onChangeText={onChange}
          placeholder={placeholder}
          autoCapitalize="none"
          onFocus={() => setFocusColor(true)}
          //TODO: show active class if value is not empty
          onBlur={() => setFocusColor(false)}
          // secureTextEntry={togglePassword ? true : false}
          {...props}
        />
        {/* {error && (
        )} */}

        {type === 'password' && (
          <Pressable
            style={styles.toggleBtn}
            onPress={() => {
              if (!setTogglePassword) return
              setTogglePassword(!togglePassword)
            }}>
            {togglePassword ? <EyeOff /> : <Eye />}
          </Pressable>
        )}
      </View>
      {error?.type && (
        <View style={styles.errorContainer}>
          <Info />
          <Text style={styles.errorText}>{error.message}</Text>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  formControl: {
    marginTop: 16,
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
  },
  input: {
    paddingVertical: 2,
    paddingHorizontal: 0,
    fontFamily: fonts.regular,
    fontSize: 18,
    color: colors.main,
  },
  inputLabel: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: colors.text,
  },
  toggleBtn: {
    position: 'absolute',
    right: 15,
    top: '50%',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  errorText: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.red,
    marginLeft: 4,
  },
})
export default Input
