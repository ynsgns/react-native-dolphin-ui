import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
  Text,
  View,
} from 'react-native';
import { colors, images } from '../../assets';
import BottomSheet from '../bottomsheet';
import Label from '../label';
import styles from './assets/styles';
import RenderItem from './lib/renderItem';
import type { SelectOptionsType, SelectPropsType } from './assets/types';

const emptySelectValue: SelectOptionsType = { value: '', label: '' };

function Select({
  title,
  placeholder,
  options = null,
  onSelected,
  valueField,
  labelField,
  value,
  isSearch,
  errorText,
  canDelete,
  disabled,
}: SelectPropsType) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectValue, setSelectedValue] = useState<SelectOptionsType>(
    value || emptySelectValue
  );
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    if (value) {
      setSelectedValue(value);
    }
  }, [value]);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const modalCloseHandle = (evt: boolean) => {
    setIsOpenModal(evt);
  };
  const onSelectItem = (selectedItem: SelectOptionsType, index: number) => {
    setSelectedValue(selectedItem);
    onSelected?.(selectedItem, index);
    toggleModal();
  };
  const onDeletePress = () => {
    setSelectedValue(emptySelectValue);
    onSelected?.(emptySelectValue, -1);
  };

  const renderItem = (item: ListRenderItemInfo<SelectOptionsType>) => {
    return (
      <RenderItem
        data={item}
        onSelectItem={onSelectItem}
        selectValue={selectValue}
      />
    );
  };

  const getFlatListData = (): Array<SelectOptionsType> => {
    let returnData: Array<SelectOptionsType> = [];

    options?.forEach((option) => {
      const valueData = valueField ? option[valueField] : option.value;
      const label = labelField ? option[labelField] : option.label;

      if (isSearch) {
        if (
          label &&
          label?.toLocaleLowerCase()?.search(searchText.toLocaleLowerCase()) >
            -1
        ) {
          returnData.push({ value: valueData, label });
        }
      } else {
        returnData.push({ value: valueData, label });
      }
    });
    return returnData;
  };

  return (
    <View style={styles.container}>
      <View style={styles.label_view}>
        <Label title={title} />
      </View>
      <Pressable
        disabled={disabled || !options}
        style={styles.button}
        onPress={toggleModal}
      >
        {selectValue?.label && canDelete && (
          <Pressable style={styles.leftDeleteContainer} onPress={onDeletePress}>
            <Text style={styles.closeText}>X</Text>
          </Pressable>
        )}
        <View style={styles.leftView}>
          <Label
            numberOfLines={1}
            title={selectValue?.label || placeholder || title}
            color={
              disabled || !options
                ? colors.borderPrimary
                : selectValue?.label
                ? colors.text
                : colors.borderPrimary
            }
          />
        </View>
        <View style={styles.rightView}>
          {options && (
            <Image
              source={
                isOpenModal ? images.arrow_up_icon : images.arrow_down_icon
              }
              style={styles.arrawIcon}
            />
          )}
        </View>
      </Pressable>
      {errorText && <Label color={colors.error} title={errorText} />}
      <BottomSheet
        title={placeholder || title}
        isSearch={isSearch}
        onSearchChange={(e) => setSearchText(e)}
        isShow={isOpenModal}
        handleClosePress={modalCloseHandle}
      >
        <FlatList
          data={getFlatListData()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </BottomSheet>
    </View>
  );
}

export default Select;
