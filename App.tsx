/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  NativeModules,
  NativeEventEmitter,
  Button,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const [authorizationToken, setAuthorizationToken] = useState('');
  const [response, setResponse] = useState<string | undefined>(undefined);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    flex: 1,
  };
  const {JumioMobileSDK} = NativeModules;

  const startJumio = () => {
    setResponse('Cargando');
    JumioMobileSDK.initialize(authorizationToken, 'US');
    JumioMobileSDK.start();
  };

  const emitterJumio = new NativeEventEmitter(JumioMobileSDK);
  emitterJumio.addListener('EventResult', EventResult => {
    console.warn('EventResult: ' + JSON.stringify(EventResult));
    setResponse(JSON.stringify(EventResult));
  });
  emitterJumio.addListener('EventError', EventError => {
    console.error('EventError: ' + JSON.stringify(EventError));
    setResponse(JSON.stringify(EventError));
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <TextInput
        placeholder="Ingrese el token"
        placeholderTextColor="#000"
        returnKeyType="done"
        onChangeText={text => setAuthorizationToken(text)}
        value={authorizationToken}
      />
      <Button title={'Buscar'} onPress={startJumio} />
      <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 16}}>
        {response ? (
          <Text style={{textAlign: 'center', textAlignVertical: 'center'}}>
            {response}
          </Text>
        ) : undefined}
      </View>
    </SafeAreaView>
  );
}

export default App;
