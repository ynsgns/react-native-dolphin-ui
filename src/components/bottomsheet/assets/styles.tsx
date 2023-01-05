import { StyleSheet } from 'react-native';
import { colors, commonStyle, numbers } from '../../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: numbers.screen.width,
    backgroundColor: colors.transparent,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
  },
  topView: {
    width: numbers.screen.width,
  },
  marginBottom20: {
    marginBottom: 20,
  },

  searchConrainer: {
    width: numbers.screen.width * 0.9,
    marginBottom: 12,
  },
  modalView: {
    width: numbers.screen.width,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    borderTopWidth: 6,
    borderTopColor: colors.borderPrimary,
    paddingVertical: 35,
    paddingBottom: 100,
    paddingHorizontal: 20,
  },
  modalViewTop: {
    width: numbers.screen.width,
    alignItems: 'center',
    marginTop: -35,
  },
  modalTopLine: {
    ...commonStyle.shadow,
    backgroundColor: colors.borderPrimary,
    height: 6,
    width: '40%',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: numbers.fontSize.l,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalDescription: {
    color: colors.text,
    textAlign: 'center',
  },
  modalDescriptionContainer: {
    flex: 1,
  },
  modalDescriptionContainerBtn: {
    marginBottom: 30,
  },
  content: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
