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
}

const Input = ({
  title,
  placeholder,
  type,
  name,
  control,
  defaultValue = '',
  ...props
}: InputType) => {
  const [focusColor, setFocusColor] = React.useState(false)
  const [togglePassword, setTogglePassword] = React.useState(false)
  const {
    field: {value},
  } = useController({
    name,
    control,
    defaultValue,
  })

  console.log('name', value)

  return (
    <View
      style={[
        styles.formControl,
        {
          borderColor: focusColor ? colors.blue : '#ced4da',
        },
      ]}>
      <Text style={styles.inputLabel}>{title}</Text>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize="none"
        onFocus={() => setFocusColor(true)}
        onBlur={() => setFocusColor(false)}
        // secureTextEntry={togglePassword ? false : true}
        {...props}
      />

      {type === 'password' && (
        <Pressable
          style={styles.toggleBtn}
          onPress={() => setTogglePassword(!togglePassword)}>
          {togglePassword ? <EyeOff /> : <Eye />}
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  formControl: {
    marginTop: 16,
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
    borderWidth: 1.5,
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
})
export default Input
