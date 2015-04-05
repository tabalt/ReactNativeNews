/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    SwitchIOS,
} = React;

var Setting = React.createClass({
    getInitialState() {
        return {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
        };
    },
    render : function() {
        return (
            <View style={styles.container}>
                <View style={styles.configItem}>
                    <Text>非WIFI下载图片</Text>
                    <SwitchIOS
                        onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
                        style={{marginLeft: 10}}
                        value={this.state.falseSwitchIsOn} />
                </View>
                <View style={styles.configItem}>
                    <Text>WIFI下自动缓存新闻</Text>
                    <SwitchIOS
                        onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                        style={{marginLeft: 10}}
                        value={this.state.trueSwitchIsOn} />
                </View>
                <View style={styles.configItem}>
                    <Text>新闻推送</Text>
                    <SwitchIOS
                        onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                        style={{marginLeft: 10}}
                        value={this.state.trueSwitchIsOn} />
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : 20,
        //justifyContent: 'top',
        alignItems: 'center',
        color : '#bababa',
        backgroundColor : '#ffffff',
        fontSize : 12,
    },
    configItem : {
        flex: 1,
        flexDirection : 'row',
    }
});

module.exports = Setting;

