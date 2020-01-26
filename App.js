import React from 'react';
import { AppLoading } from 'expo';
import { MainLayout } from './src/MainLayout';
import { bootstrap } from './src/bootstrap';
import { UserState } from './src/context/user/UserState';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={bootstrap}
          onFinish={() => this.setState({ isReady: true })}
          onError={err => console.log(err)}
        />
      );
    }

    return (
      <UserState>
        <MainLayout />
      </UserState>
    );
  }
}
