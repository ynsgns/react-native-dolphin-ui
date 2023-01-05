import React from 'react';
import { Platform, Text, View } from 'react-native';
import { colors, numbers } from '../../assets';
import type { LabelProps } from './assets/types';

export function labelMoneyFormat(value: any): string {
  let money = 0.0;
  if (typeof value === 'string' || typeof value === 'number') {
    money = parseFloat(value.toString());

    var p = money.toFixed(2).split('.');
    return (
      p?.[0]
        ?.split('')
        .reverse()
        .reduce(function (acc: string, num: string, i: number) {
          return num + (num !== '-' && i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1] +
      ' ₺'
    );
  }
  return value;
}

function Label(props: LabelProps) {
  const {
    title,
    isMoney,
    containerStyle,
    fontWeight = 'normal',
    size = numbers.fontSize.md,
    isWhite = false,
    isError = false,
    bold = false,
    center = false,
    color,
    xs,
    small,
    md,
    large,
    xl,
    xxl,
    style,
    secondary,
  } = props || {};
  const textColor =
    color ||
    (isError
      ? colors.error
      : secondary
      ? '#9c9c9c'
      : isWhite
      ? colors.textSecondary
      : colors.text);

  const defaultFontWeight = bold
    ? Platform.OS === 'ios'
      ? '600'
      : 'bold'
    : fontWeight;
  const textAlign = center ? 'center' : 'left';

  const getFontSize = (): number => {
    let fontSize = size;
    if (xs) {
      fontSize = numbers.fontSize.xs;
    } else if (small) {
      fontSize = numbers.fontSize.s;
    } else if (md) {
      fontSize = numbers.fontSize.md;
    } else if (large) {
      fontSize = numbers.fontSize.l;
    } else if (xl) {
      fontSize = numbers.fontSize.xl;
    } else if (xxl) {
      fontSize = numbers.fontSize.xxl;
    }
    return fontSize;
  };

  let textProp = props?.numberOfLines
    ? {
        numberOfLines: props.numberOfLines,
      }
    : {};

  return (
    <View style={containerStyle || {}}>
      <Text
        style={[
          {
            fontSize: getFontSize(),
            color: textColor,
            fontWeight: defaultFontWeight,
            textAlign,
          },
          style,
        ]}
        {...textProp}
      >
        {isMoney ? labelMoneyFormat(title) : title}
      </Text>
    </View>
  );
}

export default Label;
