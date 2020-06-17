import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    margin: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: colors.font,
  },
  label: {
    fontSize: 18,
    color: colors.font,
  },
  textInput: {
    borderBottomWidth: 0.3,
    borderColor: colors.black,
    color: colors.font,
    borderRadius: 5
  },
  registerCompany: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.accent,
  },
});
