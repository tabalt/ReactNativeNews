/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';

var React = require('react-native');

var LoadingView = require('./Loading');

var {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
} = React;

var NEWS_DETAIL_API_URL = 'http://88.studyteam.sinaapp.com/rnn/news_detail.php';

var NewsDetail = React.createClass({

    getInitialState : function() {
        return {
            newsData : {},
            loaded : false,
        }
    },
    componentDidMount : function() {
        this.fetchData();
    },
    fetchData : function() {
        fetch(NEWS_DETAIL_API_URL + '?id=' + this.props.news.id)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    newsData : responseData,
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
        var news = this.props.news;
        var newsContent = this.state.newsData.data;
        return (

            <ScrollView style={styles.pageContainer}>
                <View style={styles.container}>
                    <Text style={styles.newsTitle}>{news.title}</Text>
                </View>

                <View style={styles.container}>
                    <Image source={{uri : news.pic}} style={styles.newsPic} />
                </View>

                <View style={styles.container}>
                    <Text style={styles.newsContent}>{newsContent}</Text>
                </View>
            </ScrollView>
        );
    }
});

var styles = StyleSheet.create({
    pageContainer: {
        
    },
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    newsTitle : {
        color : '#4f4f4f',
        fontSize : 18,
        textAlign : 'left',
        marginTop : 10,
        marginBottom : 10,
        fontWeight : 'bold'
    },
    newsPic : {
        width : 180,
        height : 120,
        margin: 10,
    },
    newsContent : {
        margin : 10,
        marginTop : 10,
        flex: 1,
        color : '#4f4f4f',
        fontSize : 16,
        textAlign : 'left',
        writingDirection : 'ltr',
        lineHeight : 20
    },
});

module.exports = NewsDetail;

