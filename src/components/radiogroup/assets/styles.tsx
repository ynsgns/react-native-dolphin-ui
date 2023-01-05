import { StyleSheet } from 'react-native';
import { colors, numbers } from '../../../assets';

const styles = StyleSheet.create({
  container: {
    marginTop: numbers.padding.l,
    width: '100%',
  },
  label_view: {
    alignSelf: 'flex-start',
    marginBottom: numbers.padding.s,
  },

  radioViewContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 4,
  },
  renderRadioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  radioContainer: {
    width: 20,
    height: 20,
    padding: 3,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 4,
    borderColor: colors.borderPrimary,
  },
  radioSelected: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
});

export default styles;
