import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.cinza2,
    borderRadius: 10,
    width: '50%',
    height: '50%',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    width: '40%',
    height: '80%',
  },
  label: {
    fontSize: 14,
    color: colors.white,
  }
});
