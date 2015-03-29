/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var {
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} = React;

var NEWS_LIST_API_URL = 'http://88.studyteam.sinaapp.com/rnn_news_list.json?';

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
            return this.renderLoadingView();
        }
        return (
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={this.renderNews}
                style={styles.listView} />
        );
    },
    renderLoadingView : function() {
        return (
                <View style={[styles.pageContainer, {marginTop : 50}]}>
                <View style={styles.container}>
                    <Text>
                        Loading News...
                    </Text>
                </View>
            </View>
        );
    },
    renderNews : function(news) {
        return (
            <TouchableOpacity onPress={this.onPressNews(news.id)}>
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
    onPressNews : function(newsId) {
        //TODO 启动新页面
        console.log(newsId)
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
    rightContainer: {
        flex: 1,
    },
    newsItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    },
    listView: {
        paddingTop: 10,
        backgroundColor: '#F5FCFF',
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

