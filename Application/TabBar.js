/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var NewsList = require('./NewsList');

var {
    StyleSheet,
    View,
    TabBarIOS,
    Text
} = React;

var TabBarItemIOS = TabBarIOS.Item;

var TabBar = React.createClass({

    getInitialState : function() {
        return {
            selectedTab: 'blueTab',
            presses: 0,
        }
    },
    _renderTabContent: function(color: string, pageText: string) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{this.state.presses} re-renders of this tab</Text>
            </View>
        );
    },

    render : function() {
        
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarItemIOS
                    name="blueTab"
                    icon={_ix_DEPRECATED('favorites')}
                    accessibilityLabel="Blue Tab"
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}>
                    <NewsList />
                </TabBarItemIOS>
                <TabBarItemIOS
                    accessibilityLabel="Red Tab"
                    name="redTab"
                    icon={_ix_DEPRECATED('history')}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                    }}>
                    {this._renderTabContent('#783E33', 'Red Tab')}
                </TabBarItemIOS>
                <TabBarItemIOS
                    name="greenTab"
                    icon={_ix_DEPRECATED('more')}
                    accessibilityLabel="Green Tab"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                            presses: this.state.presses + 1
                        });
                    }}>
                    {this._renderTabContent('#21551C', 'Green Tab')}
                </TabBarItemIOS>
          </TabBarIOS>
        );
    },
});

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

function _ix_DEPRECATED(imageUri) {
    return {
        uri: imageUri,
        isStatic: true,
    };
}

module.exports = TabBar;
