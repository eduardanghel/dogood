import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import COLOR from '../../reusables/Colors'
import Category from '../../reusables/HorizontalEventList';
import categories from '../../reusables/lists/CategoriesOfCauses';
import mapOfCategories from '../../reusables/lists/MapOfCategories';

export default class Causes extends React.Component {
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
        backgroundColor: COLOR.backgroundGrey2,
    },
});
