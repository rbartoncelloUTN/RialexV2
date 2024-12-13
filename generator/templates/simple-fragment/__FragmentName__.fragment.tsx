import React, {FC} from 'react';
import {__FragmentName__FragmentProps} from './interfaces';
import {use__FragmentName__Controller} from './__FragmentName__.controller';
import styles from './__FragmentName__.styles';
import {View} from 'react-native';
import Text from '../../../src/components/Text/Text';

export const __FragmentName__Fragment: FC<
  __FragmentName__FragmentProps
> = props => {
  const {useController = use__FragmentName__Controller} = props;
  //REMOVE
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const controller = useController();

  // Render
  return (
    <View style={styles.root}>
      <Text>__FragmentName__</Text>
    </View>
  );
};
