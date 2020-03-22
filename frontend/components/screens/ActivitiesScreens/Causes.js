import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import Category from './HorizontalEventList.js';
import categories from '../../Lists/CategoriesOfCauses.js';
import mapOfCategories from '../../Lists/MapOfCategories.js';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView
        scrollEventThrottle={16}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        {categories.map(title => (
          <View style={{ marginBottom: 12 }}>
            <Category
              categoryTitle={title}
              expandList="See All"
              DATA={mapOfCategories.get(title)}
            />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
