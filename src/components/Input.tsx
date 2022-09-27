/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import {Control, FieldValues, useController} from 'react-hook-form'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native'
import {Eye, EyeOff} from '../assets/icons/Eye'
import {colors} from '../theme/colors'
import {fonts} from '../theme/fonts'

interface InputType extends TextInputProps {
  title: string
  placeholder?: string
  type?: string
  name: string
  control: Control<FieldValues, any>
  error?: string
}

const Input = ({
  title,
  placeholder,
  type,
  name,
  control,
  error,
  // defaultValue = '',
  ...props
}: InputType) => {
  const [focusColor, setFocusColor] = React.useState(false)
  const [togglePassword, setTogglePassword] = React.useState(false)
  const {
    field: {value, onChange},
  } = useController({
    name,
    control,
    defaultValue: '',
  })

  return (
    <>
      <View
        style={[
          styles.formControl,
          {
            borderColor: focusColor ? colors.blue : '#ced4da',
            borderWidth: focusColor ? 2.5 : 1.5,
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
          // secureTextEntry={togglePassword ? false : true}
          {...props}
        />
        {/* {error && } */}

        {type === 'password' && (
          <Pressable
            style={styles.toggleBtn}
            onPress={() => setTogglePassword(!togglePassword)}>
            {togglePassword ? <EyeOff /> : <Eye />}
          </Pressable>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
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
  errorText: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: '#e02020',
    paddingTop: 5,
    paddingBottom: 10,
  },
})
export default Input
