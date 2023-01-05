import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { colors } from '../../assets';
import Label from '../label';
import styles from './assets/styles';
import type { SelectOptionsType } from '../select/assets/types';
import type { InputProps } from './assets/types';

function RadioGroup(props: InputProps) {
  const {
    options,
    selectedItemValue,
    label,
    containerStyle,
    errorText,
    hiddenLabel = false,
    onSelect,
  } = props || {};

  const onSelectRadioItem = (value: string | number | null) => {
    setSelectedItem(value);
    // @ts-ignore
    onSelect(value);
  };

  const [selectedItem, setSelectedItem] = useState<string | number | null>(
    selectedItemValue || null
  );

  const renderRadio = (item: SelectOptionsType, index: number) => (
    <TouchableOpacity
      key={index}
      style={styles.renderRadioContainer}
      onPress={() => onSelectRadioItem(item.value)}
    >
      <View style={styles.radioContainer}>
        {item.value === selectedItem && <View style={styles.radioSelected} />}
      </View>
      <Label title={item.label} />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, containerStyle || {}]}>
      {!hiddenLabel && (
        <View style={styles.label_view}>
          <Label title={label || ' '} />
        </View>
      )}
      <View style={styles.radioViewContainer}>
        {options.map((item, index) => renderRadio(item, index))}
      </View>
      {errorText && <Label color={colors.error} title={errorText} />}
    </View>
  );
}

export default RadioGroup;
