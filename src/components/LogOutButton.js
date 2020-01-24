import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { UserContext } from '../context/user/userContext';

export const LogOutButton = props => {
  const { logoutUser } = useContext(UserContext);

  return (
    <View style={{ paddingRight: 10 }}>
      <Button onPress={logoutUser} title='Log Out' />
    </View>
  );
};
