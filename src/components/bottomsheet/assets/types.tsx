import type { ReactNode } from 'react';

export interface BottomSheetProps {
  title: string;
  description?: string;
  isShow: boolean;
  isSearch?: boolean;
  children?: ReactNode | undefined;
  handleClosePress: (isShow: boolean) => void;
  onSearchChange?: (value: string) => void;
  onApprovePress?: () => void;
  onClosePress?: () => void;
}

export type viewHeightsType = {
  topViewHeight: number;
  bottomViewHeight: number;
};
