import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { colors, commonStyle, numbers } from '../../assets';
import Label from '../label';
import styles from './assets/styles';
import type { ButtonProps } from './assets/types';

function Button(props: ButtonProps): JSX.Element {
  const {
    titleStyle,
    title,
    circle,
    textColor,
    bgColor,
    containerStyle,
    linkContainer,
    isLink,
    secondary,
    disabled,
    loading,
  } = props || {};
  const borderRadius = circle ? 99 : numbers.padding.md;
  const backgroundColor = isLink
    ? colors.transparent
    : bgColor ||
      (secondary ? colors.secondary : colors.primary) + (disabled ? '80' : '');
  const linkColor = secondary ? colors.secondary : colors.primary;

  const txtColor =
    textColor ||
    (isLink
      ? linkColor
      : secondary
      ? colors.textSecondary
      : colors.textSecondary);

  return (
    <View style={[isLink ? {} : styles.width100, containerStyle || {}]}>
      {isLink ? (
        <TouchableOpacity
          style={[
            styles.link_view,
            linkContainer,
            { borderRadius, backgroundColor },
          ]}
          activeOpacity={0.7}
          {...props}
        >
          <View style={commonStyle.flex1_center}>
            <Label
              title={title}
              color={txtColor}
              style={[isLink ? styles.link_title : {}, titleStyle]}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            isLink ? linkContainer || {} : styles.container,
            { borderRadius, backgroundColor },
            // eslint-disable-next-line react-native/no-inline-styles
            { flexDirection: isLink ? 'column' : 'row' },
          ]}
          disabled={loading}
          activeOpacity={0.7}
          {...props}
        >
          <View style={commonStyle.flex1_center}>
            <Label
              title={title}
              color={txtColor}
              style={[isLink ? styles.link_title : {}, titleStyle]}
            />
          </View>
          {loading && (
            // eslint-disable-next-line react-native/no-inline-styles
            <ActivityIndicator color={txtColor} style={{ marginRight: 12 }} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Button;
