import type { ReactElement, ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export interface FormProps {
  title?: string;
  style?: ViewStyle;
  rightComp?: ReactElement;
  children?: ReactNode | undefined;
  onPress?: () => void;
}
