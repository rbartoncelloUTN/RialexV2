import {Text as RNText} from 'react-native';
import React, {FC} from 'react';
import styles from './Text.styles';
import {TextProps} from './interfaces';
import typography from '../../theme/typography';

const Text: FC<TextProps> = ({size, weight, lineHeight, ...props}) => {
  const getFontFamily = () => {
    let fontFamily;
    switch (weight) {
      case 400:
        fontFamily = typography.fontFamily.Plus_Jakarta_Sans_400;
        break;
      case 500:
        fontFamily = typography.fontFamily.Plus_Jakarta_Sans_500;
        break;
      case 600:
        fontFamily = typography.fontFamily.Plus_Jakarta_Sans_600;
        break;
      case 700:
        fontFamily = typography.fontFamily.Plus_Jakarta_Sans_700;
        break;
      case 800:
        fontFamily = typography.fontFamily.Plus_Jakarta_Sans_800;
        break;
    }
    return fontFamily;
  };

  const getFontSize = () => {
    let fontSize;
    switch (size) {
      case 10:
        fontSize = typography.fontSize.xl_small_10;
        break;
      case 12:
        fontSize = typography.fontSize.x_small_12;
        break;
      case 14:
        fontSize = typography.fontSize.small_14;
        break;
      case 16:
        fontSize = typography.fontSize.regular_16;
        break;
      case 18:
        fontSize = typography.fontSize.x_regular_18;
        break;
      case 20:
        fontSize = typography.fontSize.xl_regular_20;
        break;
      case 24:
        fontSize = typography.fontSize.large_24;
        break;
      case 28:
        fontSize = typography.fontSize.extraLarge_28;
        break;
      case 40:
        fontSize = typography.fontSize.extraExtraLarge_40;
        break;
    }
    return fontSize;
  };
  return (
    <RNText
      {...props}
      style={[
        styles.textDefault,
        props.style,
        {
          fontFamily: getFontFamily(),
          fontSize: getFontSize(),
          lineHeight: lineHeight,
        },
      ]}
    >
      {props.children}
    </RNText>
  );
};

export default Text;
