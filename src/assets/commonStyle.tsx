import { StyleSheet } from 'react-native';
import colors from './colors';

const commonStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  row_center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
  },
  marginBottom8: {
    marginBottom: 8,
  },
  marginBottom32: {
    marginBottom: 32,
  },
  flex1_center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1_row_center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16.0,

    elevation: 16,
  },
});

export default commonStyle;
