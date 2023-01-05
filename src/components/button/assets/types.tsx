import type { TouchableOpacityProps, ViewStyle } from 'react-native';
import type { LabelProps } from '../../label/assets/types';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  titleStyle?: LabelProps;
  containerStyle?: ViewStyle;
  linkContainer?: ViewStyle;
  bgColor?: string;
  textColor?: string;
  circle?: boolean;
  isLink?: boolean;
  secondary?: boolean;
  loading?: boolean;
}
