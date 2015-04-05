/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var NewsList = require('./NewsList');
var LoadingView = require('./Loading');
var SettingView = require('./Setting');

var {
    StyleSheet,
    View,
    TabBarIOS,
    NavigatorIOS,
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

                    <NavigatorIOS
                        style={[styles.container,{flex : 1, marginTop : 0}]}
                        initialRoute={{
                            title: 'News List',
                            component: NewsList,
                        }} />

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
                    <LoadingView />
                </TabBarItemIOS>
                <TabBarItemIOS
                    name="greenTab"
                    icon={_ix_DEPRECATED('more')}
                    accessibilityLabel="Green Tab"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                    }}>
                    <LoadingView />
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
