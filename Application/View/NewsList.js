/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var NewsDetail = require('./NewsDetail');
var LoadingView = require('./Loading');

var {
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Navigator
} = React;

var NEWS_LIST_API_URL = 'http://88.studyteam.sinaapp.com/rnn/news_list.json';

var NewsList = React.createClass({

    getInitialState : function() {
        return {
            dataSource : new ListView.DataSource({
                rowHasChanged : (row1, row2) => row1 !== row2
            }),
            loaded : false,
        }
    },
    componentDidMount : function() {
        this.fetchData();
    },
    fetchData : function() {
        fetch(NEWS_LIST_API_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource : this.state.dataSource.cloneWithRows(responseData),
                    loaded : true,
                });
            })
            .done();
    },
    render : function() {
        if (!this.state.loaded) {
            return (
                <LoadingView />
            );
        }
        return (
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={this.renderNews}
                style={styles.listView} />
        );
    },
    renderNews : function(news) {
        return (
            <TouchableOpacity onPress={() => this.onPressNews(news)}>
                <View style={styles.pageContainer}>
                    <View style={[styles.container, styles.newsItemContainer]}>
                        <Image 
                        source={{uri : news.pic}}
                        style={styles.newsPic} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.newsTitle}>{news.title}</Text>
                            <Text style={styles.newsSummary}>{news.summary}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    onPressNews : function(news) {
        
        this.props.navigator.push({
            title: "News Detail",
            component: NewsDetail,
            passProps: {news},
        });
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
        backgroundColor: '#ffffff',
    },
    rightContainer: {
        flex: 1,
    },
    newsItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    },
    listView: {
        backgroundColor: '#ffffff',
    },
    newsPic : {
        width : 90,
        height : 60,
        margin: 10,
        marginLeft: 0,
    },
    newsTitle : {
        color : '#4f4f4f',
        fontSize : 16,
        textAlign : 'left',
    },
    newsSummary : {
        color : '#bababa',
        fontSize : 14,
        textAlign : 'left',
    },
});

module.exports = NewsList;

