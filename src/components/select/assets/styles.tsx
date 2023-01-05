import { Platform, StyleSheet } from 'react-native';
import { colors, numbers } from '../../../assets';

const styles = StyleSheet.create({
  container: {
    marginTop: numbers.padding.l,
    width: '100%',
  },
  button: {
    borderWidth: 1,
    borderColor: colors.borderPrimary,
    paddingHorizontal: 8,
    height: Platform.OS === 'ios' ? 52 : 50,
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.text,
  },
  label_view: {
    alignSelf: 'flex-start',
    marginBottom: numbers.padding.s,
  },
  leftView: {
    flex: 1,
    justifyContent: 'center',
  },
  leftDeleteContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 4,
  },
  rightView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  closeText: {
    color: '#000',
    fontWeight: 'bold',
  },
  arrawIcon: {
    width: 25,
    height: 25,
  },
  //renderItem
  renderItem_container: {
    marginBottom: 8,
    justifyContent: 'center',
  },
  renderItem_button: {
    paddingVertical: numbers.padding.l,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 3,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 4,
    paddingLeft: 8,
  },
  renderItem_lines: {
    backgroundColor: '#eee',
    width: '100%',
    height: 1,
  },
});

export default styles;
