import {standardHeight} from '../utils/scaling';
import {RFValue} from 'react-native-responsive-fontsize';

const fontSize = {
  xl_small_10: RFValue(10, standardHeight),
  x_small_12: RFValue(12, standardHeight),
  small_14: RFValue(14, standardHeight),
  regular_16: RFValue(16, standardHeight),
  x_regular_18: RFValue(18, standardHeight),
  xl_regular_20: RFValue(20, standardHeight),
  large_24: RFValue(24, standardHeight),
  extraLarge_28: RFValue(28, standardHeight),
  extraExtraLarge_40: RFValue(40, standardHeight),
};

const fontFamily = {
  Plus_Jakarta_Sans_400: 'PlusJakartaSans-Regular',
  Plus_Jakarta_Sans_500: 'PlusJakartaSans-Medium',
  Plus_Jakarta_Sans_600: 'PlusJakartaSans-SemiBold',
  Plus_Jakarta_Sans_700: 'PlusJakartaSans-Bold',
  Plus_Jakarta_Sans_800: 'PlusJakartaSans-ExtraBold',
};

export default {
  fontSize,
  fontFamily,
};
