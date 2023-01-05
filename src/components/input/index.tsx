import React, { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, commonStyle, images } from '../../assets';
import Label from '../label';
import styles from './assets/styles';
import type { InputProps } from './assets/types';

function Input(props: InputProps) {
  const {
    label,
    inputStyle,
    containerStyle,
    onChangeText,
    value,
    errorText,
    leftIcon,
    righIcon,
    multiline = false,
    hiddenLabel = false,
    isCircle = false,
    isWhite = false,
    secureTextEntry = false,
  } = props || {};
  const [inputValue, setInputValue] = useState<string>(value || '');
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const _onChangeText = (evt: string) => {
    setInputValue(evt);
    if (onChangeText) {
      onChangeText(evt);
    }
  };

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <View style={[styles.container, containerStyle || {}]}>
      {!hiddenLabel && (
        <View style={styles.label_view}>
          <Label
            title={label || ' '}
            style={[
              isCircle ? styles.paddingLeft10 : {},
              isWhite ? styles.label_white : {},
            ]}
          />
        </View>
      )}
      <View
        style={[
          styles.input_view_container,
          isWhite ? styles.input_container_white : styles.input_container,
          isCircle ? styles.input_container_circle : {},
          inputStyle || {},
        ]}
      >
        {leftIcon && leftIcon}
        <TextInput
          {...props}
          placeholder={label}
          value={inputValue}
          secureTextEntry={secureTextEntry ? !isShowPassword : false}
          onChangeText={_onChangeText}
          placeholderTextColor={
            isWhite ? colors.placeholderSecondary : colors.placeholder
          }
          style={[
            commonStyle.flex1,
            isWhite ? styles.input_white : styles.input,
            isCircle ? styles.input_circle : {},
            multiline ? styles.multiline : {},
            inputStyle || {},
          ]}
        />
        {righIcon && righIcon}
        {secureTextEntry && (
          <TouchableOpacity onPress={toggleShowPassword}>
            <Image
              source={
                isShowPassword
                  ? images.eye_slash_icon
                  : images.eye_vision_view_icon
              }
              style={styles.icon_container}
            />
          </TouchableOpacity>
        )}
      </View>
      {errorText && (
        <Label
          color={colors.error}
          title={errorText}
          style={[
            isCircle ? styles.paddingLeft10 : {},
            isWhite ? styles.label_white : {},
          ]}
        />
      )}
    </View>
  );
}

export default Input;
