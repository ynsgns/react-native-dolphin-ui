import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { colors, commonStyle } from '../../assets';
import type { LoadingProps } from './assets/types';

function Loading({ isShow }: LoadingProps) {
  return (
    <Modal visible={isShow} transparent>
      <View style={commonStyle.flex1_center}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    </Modal>
  );
}

export default Loading;
