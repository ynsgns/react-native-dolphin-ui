import type { ViewStyle } from 'react-native';
import type { SelectOptionsType } from '../../select/assets/types';

export interface InputProps {
  options: SelectOptionsType[];
  selectedItemValue?: number;
  label?: string;
  errorText?: string;
  containerStyle?: ViewStyle;
  onSelect: (value: number) => void;
  hiddenLabel?: boolean;
}
