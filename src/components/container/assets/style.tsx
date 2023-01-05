import { StyleSheet } from 'react-native';
import { numbers } from '../../../assets';

const styles = StyleSheet.create({
  view_style: {
    height: numbers.screen.height,
    width: numbers.screen.width,
  },
  keyboardView_style: {
    height: numbers.screen.height,
    width: numbers.screen.width,
  },
  scroll_style: {},
  scroll_container: {
    minHeight: numbers.screen.height,
    width: numbers.screen.width,
    paddingHorizontal: numbers.padding.l,
    paddingBottom: 200,
  },
  view_container: {
    minHeight: numbers.screen.height,
    width: numbers.screen.width,
    paddingHorizontal: numbers.padding.l,
  },
  loaing: {
    height: numbers.screen.height,
    width: numbers.screen.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
