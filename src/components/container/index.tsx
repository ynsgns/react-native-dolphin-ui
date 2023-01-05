import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { colors } from '../../assets';
import styles from './assets/style';
import type { ContainerProps } from './assets/types';

function Container({
  children,
  backgroundColor,
  disabledScroll = false,
  loading = false,
}: ContainerProps) {
  return (
    <View
      style={[
        styles.view_style,
        { backgroundColor: backgroundColor || colors.background },
      ]}
    >
      <KeyboardAvoidingView
        style={styles.keyboardView_style}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={100}
      >
        {loading ? (
          <View style={styles.loaing}>
            <ActivityIndicator color={colors.primary} />
          </View>
        ) : disabledScroll ? (
          <View style={styles.view_container}>{children}</View>
        ) : (
          <ScrollView
            style={styles.scroll_style}
            contentContainerStyle={styles.scroll_container}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

export default Container;
