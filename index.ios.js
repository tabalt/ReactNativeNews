/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var TabBarView = require('./Application/View/TabBar');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var ReactNativeNews = React.createClass({
    
    render : function() {
        return (
            <TabBarView style={styles.container} />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

AppRegistry.registerComponent('ReactNativeNews', () => ReactNativeNews);

