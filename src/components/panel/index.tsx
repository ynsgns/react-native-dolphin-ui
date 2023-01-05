import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Label from '../label';
import styles from './assets/styles';
import type { FormProps } from './assets/types';

function Panel({ children, rightComp, onPress, style, title = '' }: FormProps) {
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={[styles.panel, style || {}]}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {title && <Label title={title} large bold style={styles.labe_style} />}
        {rightComp && rightComp}
      </View>
      {children}
    </TouchableOpacity>
  );
}

export default Panel;
