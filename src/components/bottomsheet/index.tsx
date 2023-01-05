import React, { useEffect, useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { numbers } from '../../assets';
import Input from '../input';
import styles from './assets/styles';
import { useSwipe } from './lib/useSwipe';
import type { BottomSheetProps } from './assets/types';
import Button from '../button';

const topViewHeight = numbers.screen.height * 0.4;
const bottomViewHeight = numbers.screen.height * 0.6;

function BottomSheet({
  title,
  description,
  isShow,
  handleClosePress,
  children,
  onSearchChange,
  isSearch,
  onApprovePress,
  onClosePress,
}: BottomSheetProps) {
  const [viewBottomMargin, setViewBottomMargin] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const { onTouchStart, onTouchEnd, onTouchMovie } = useSwipe(
    onSwipeUp,
    onSwipeDown,
    6
  );

  useEffect(() => {
    setIsOpen(isShow);
    setViewBottomMargin(0);
  }, [isShow]);

  function onSwipeUp() {}

  function onSwipeDown() {
    if (viewBottomMargin < 0) {
      onRequestClose();
    } else {
      setViewBottomMargin(0);
    }
  }

  const _onTouchMovie = (e: any) => {
    const num = onTouchMovie(e);
    const diffBottom = bottomViewHeight - num;
    if (num > 10) {
      setViewBottomMargin(diffBottom);
    }
  };

  const onRequestClose = () => {
    handleClosePress(!isOpen);
    setIsOpen(!isOpen);
  };

  const onOkPress = () => {
    setIsOpen(!isOpen);
    handleClosePress(!isOpen);
    onApprovePress?.();
  };

  const onNoPress = () => {
    setIsOpen(!isOpen);
    handleClosePress(!isOpen);
    onClosePress?.();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onRequestClose}
    >
      <View style={styles.container}>
        <Pressable
          style={[
            styles.topView,
            {
              height: topViewHeight,
            },
          ]}
          onPress={onRequestClose}
        />
        <View
          style={[
            styles.modalView,
            { height: bottomViewHeight, marginBottom: viewBottomMargin },
          ]}
        >
          <View
            style={styles.modalViewTop}
            onTouchStart={onTouchStart}
            onTouchMove={_onTouchMovie}
            onTouchEnd={onTouchEnd}
          >
            <View style={styles.modalTopLine} />
            <Text
              style={[styles.modalTitle, isSearch ? {} : styles.marginBottom20]}
            >
              {title || ''}
            </Text>
            <View style={[styles.searchConrainer, styles.marginBottom20]}>
              {isSearch && (
                <Input
                  label="Sarch"
                  isCircle
                  hiddenLabel
                  value={searchText}
                  onChangeText={(e) => {
                    setSearchText(e);
                    if (onSearchChange) {
                      onSearchChange(e);
                    }
                  }}
                  righIcon={{
                    iconType: 'AntDesign',
                    name: 'search1',
                  }}
                />
              )}
            </View>
          </View>
          {children ? (
            <View style={styles.content}>{children}</View>
          ) : (
            <View style={styles.content}>
              <View style={styles.modalDescriptionContainer}>
                {description && (
                  <Text style={styles.modalDescription}>
                    {description || ''}
                  </Text>
                )}
              </View>
              <View style={styles.modalDescriptionContainerBtn}>
                <Button title="Ok" onPress={onOkPress} />
                <Button title="Cancel" secondary onPress={onNoPress} />
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

export default BottomSheet;
