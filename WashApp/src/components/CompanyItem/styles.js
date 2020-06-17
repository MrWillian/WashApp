import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    height: '30%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.font,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    width: '20%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: colors.cinza2,
  },
  infoCompanyContainer: {
    width: '40%',
    margin: 5,
    justifyContent: 'space-evenly',
  },
  infoCompanyNameLabel: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoCompanyValueLabel: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnActionService: {
    height: '50%',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnActionChat: {
    height: '50%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }
});
