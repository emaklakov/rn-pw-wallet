import React, { useContext } from 'react';
import { Container } from 'native-base';
import { UserContext } from './context/user/userContext';
import { LogInNavigation } from './navigation/LogInNavigation';
import { AppNavigation } from './navigation/AppNavigation';

export const MainLayout = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      {currentUser && currentUser.id_token ? (
        <AppNavigation />
      ) : (
        <LogInNavigation />
      )}
    </Container>
  );
};
