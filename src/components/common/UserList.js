import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
 import { ListItem } from 'react-native-elements'; // version 1.0.0-beta5

export class UserList extends Component {

  static defaultProps = { users: [] }

  _keyExtractor = (item, index) => index.toString()

  _renderItem = ({ item }) => {
    return (
      <ListItem
        bottomDivider
        chevron
        leftAvatar={{ size: "medium", source: {uri: item.picture.medium}}}
        leftIconOnPress={() => console.log('log me')}
        onPress={() => console.log(`pressed: ${item.name.first}`)}
        subtitle={item.login.username}
        subtitleStyle={{ opacity: 0.7 }}
        title={`${item.name.first} ${item.name.last}`}
      />
    );
  }

  render() {
    const { users } = this.props;

    if (users.length == 0) {
      return null;
    }

    return (
      <FlatList
        data={users}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}
