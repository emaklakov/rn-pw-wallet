import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Container, Content } from 'native-base';
import { AppNavigation } from './src/navigation/AppNavigation';
import { bootstrap } from './src/bootstrap';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <Container>
      <AppNavigation />
    </Container>
  );
}
