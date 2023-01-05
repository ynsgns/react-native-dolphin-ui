import type { ListRenderItemInfo } from 'react-native';

export type SelectPropsType = {
  title: string;
  options: Array<SelectOptionsType | any> | null;
  valueField?: string;
  labelField?: string;
  placeholder?: string;
  errorText?: string;
  value?: SelectOptionsType;
  onSelected?: (selectedItem: SelectOptionsType, index: number) => void;
  isSearch?: boolean;
  canDelete?: boolean;
  disabled?: boolean;
};

export type RenderItemProps = {
  data: ListRenderItemInfo<SelectOptionsType>;
  selectValue: SelectOptionsType;
  onSelectItem: (selectedItem: SelectOptionsType, index: number) => void;
};
export type SelectOptionsType = {
  label: string;
  value: SelectValueType;
};
export type SelectValueType = string | number | null;
