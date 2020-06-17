import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    height: '10%',
    width: '100%',
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoHeader: {
    backgroundColor: colors.cinza2,
    height: 40,
    width: 40,
    borderRadius: 5,
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    margin: 10,
    alignSelf: 'flex-end'
  },
  btnLabelActive: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
  },
  btnLabel: {
    color: colors.font,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
