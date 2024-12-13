import {TextProps as RNTextProps} from 'react-native';

export interface TextProps extends RNTextProps {
  size: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 40;
  weight: 400 | 500 | 600 | 700 | 800;
  lineHeight: number;
}
