import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Appbar, Menu, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MenuAppBar() {
  const [auth, setAuth] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleChange = () => {
    setAuth(!auth);
  };

  const handleMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Switch value={auth} onValueChange={handleChange} />
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Content title="Photos" />
        {auth && (
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity onPress={handleMenu}>
                <Icon name="account-circle" size={30} />
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={closeMenu} title="Profile" />
            <Menu.Item onPress={closeMenu} title="My account" />
          </Menu>
        )}
      </Appbar.Header>
    </View>
  );
}
