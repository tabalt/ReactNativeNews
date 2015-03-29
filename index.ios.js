/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var TabBar = require('./Application/TabBar');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} = React;

var ReactNativeNews = React.createClass({

    getInitialState : function() {
        return {

            
        }
    },
    
    render : function() {
        return (
            <TabBar style={styles.container} />
        );
    },
    

});

var styles = StyleSheet.create({
    pageContainer: {
        marginLeft : 10,
        marginRight : 10,
    },
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('ReactNativeNews', () => ReactNativeNews);

