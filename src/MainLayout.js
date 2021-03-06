import React from 'react';
import { Root, Container } from 'native-base';
import { UserContext } from './context/user/userContext';
import { LogInNavigation } from './navigation/LogInNavigation';
import { AppNavigation } from './navigation/AppNavigation';

export class MainLayout extends React.Component {
  static contextType = UserContext;

  render() {
    const currentUser = this.context.currentUser;

    return (
      <Root>
        <Container>
          {currentUser && currentUser.id_token ? (
            <AppNavigation />
          ) : (
            <LogInNavigation />
          )}
        </Container>
      </Root>
    );
  }
}
