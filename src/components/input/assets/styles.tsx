import { Platform, StyleSheet } from 'react-native';
import { colors, numbers } from '../../../assets';

const styles = StyleSheet.create({
  container: {
    marginTop: numbers.padding.l,
    width: '100%',
  },
  paddingLeft10: {
    paddingLeft: 10,
  },
  label_view: {
    alignSelf: 'flex-start',
    marginBottom: numbers.padding.s,
  },
  label_white: {
    color: colors.textSecondary,
  },
  input_view_container: {
    zIndex: -1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_container: {
    borderWidth: 0.5,
    borderColor: colors.borderPrimary,
    backgroundColor: colors.white,
  },
  input_container_circle: {
    borderRadius: 44,
  },
  input_container_white: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: colors.textSecondary,
  },
  input: {
    paddingHorizontal: 8,
    height: Platform.OS === 'ios' ? 52 : 50,
    color: colors.text,
  },
  multiline: {
    height: Platform.OS === 'ios' ? 72 : 70,
  },
  input_circle: {
    paddingHorizontal: 20,
    color: colors.text,
  },
  input_white: {
    color: colors.textSecondary,
    padding: numbers.padding.l,
  },
  icon_container: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
  icon_left_container: {
    marginLeft: 16,
    marginRight: -4,
  },
});

export default styles;
