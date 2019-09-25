const CryptoNewsAPI = require('crypto-news-api').default;
const Api = new CryptoNewsAPI('b8d3767b03073fb38780eb1de50198ea');
const ProxyApi = new CryptoNewsAPI('b8d3767b03073fb38780eb1de50198ea', 'http://cryptocontrol_proxy/api/v1/public');
Api.enableSentiment();

const infosSelect = {
    title:[],
    description:[],
    source:{
        favicon:[]
    },
    url:[]
}
module.exports = {
    getLatestNews : async (req, res) => {
        const latestNews = await Api.getLatestNews(language='po');
        try {
           latestNews.forEach(info => {
               infosSelect.title.push(info.title);
               infosSelect.description.push(info.description);
               infosSelect.source.favicon.push(info.source.favicon);
               infosSelect.url.push(info.url);
           });
        }catch(err){
            res.send(error)
        }
        res.send(infosSelect)
    },

}
