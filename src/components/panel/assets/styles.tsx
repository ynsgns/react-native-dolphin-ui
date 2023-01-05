import { StyleSheet } from 'react-native';
import { colors, commonStyle, numbers } from '../../../assets';

const styles = StyleSheet.create({
  panel: {
    ...commonStyle.shadow,
    width: '100%',
    backgroundColor: colors.white,
    padding: numbers.padding.xxl,
    borderRadius: numbers.padding.md,
    marginVertical: numbers.padding.md,
  },
  labe_style: {
    marginBottom: numbers.padding.s,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
