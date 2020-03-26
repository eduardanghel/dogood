import * as React from 'react';
import { List } from 'react-native-paper';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

class MyComponent extends React.Component {
    render() {
        return (
            <View>
                <Header
                    containerStyle={{
                        backgroundColor: 'white',
                        justifyContent: 'space-around',
                        height: 130,
                    }}
                    placement="left"
                    leftComponent={{ text: '    Notifications', style: { fontSize: 25, color: 'black' } }}
                />
                <List.Section>
                    <List.Subheader>This Week</List.Subheader>

                    <List.Item
                        title="The P.E.E.R. Center has sent you a message"
                        left={() => <List.Icon icon="account" />}
                    />
                    <List.Item
                        title="The P.E.E.R. Center has sent you a message"
                        left={() => <List.Icon color="#000" icon="account" />}
                    />
                    <List.Subheader>This Month</List.Subheader>
                    <List.Item
                        title="The P.E.E.R. Center has sent you a message"
                        left={() => <List.Icon icon="account" />}
                    />
                    <List.Item
                        title="The P.E.E.R. Center has sent you a message"
                        left={() => <List.Icon color="#000" icon="account" />}
                    />
                </List.Section>
            </View>
        );
    }
}

export default MyComponent;