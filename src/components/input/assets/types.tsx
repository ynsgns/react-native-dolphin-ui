import type { LegacyRef } from 'react';
import type {
  TextInput,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type InputProps = {
  ref?: LegacyRef<TextInput> | undefined;
  leftIcon?: any;
  righIcon?: any;
  label?: string;
  errorText?: string;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  isWhite?: boolean;
  isCircle?: boolean;
  hiddenLabel?: boolean;
} & TextInputProps;
