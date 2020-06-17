import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%',
    right: '10%',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.accent,
    shadowRadius: 10,
    shadowColor: '#00213B',
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    }
  },
});
