// import { Promise } from 'core-js';
import Network from './network';

export const getBanner = () => Network.get('banner?type=2');
export const getPersonalized = () => Network.get('personalized?limit=6');
export const getNewAlbum = () => Network.get('/album/newest');
export const getNewSong = () => Network.get('/personalized/newsong');
export const getPlayList = (data) => Network.get('/playlist/detail', data);
export const getAlbum = (data) => Network.get('/album', data);
export const getSongDetail = (data) => Network.get('song/detail',data);
export const getSongLyrics = (data) => Network.get('lyric', data);
export const getSongURL = (data) => Network.get('/song/url', data);
export const getArtistsSongs = (data) => Network.get('artists', data);
// export const getHotArtist = () => Network.get('/top/artists?offset=0&limit=5');
export const getHotArtist = () => {
    return new Promise(function (resolve,reject) {
        Network.get('/top/artists?offset=0&limit=5').then(function (result) {
            resolve(result.artists);
        }).catch(function (err) {
            reject(err);
        })
    })
}

export const getLetterArtist = (letter) => { 
    return new Promise(function (resolve, reject) {
        let letterArtists = [];
        Network.all([
            // Network.get(`artist/list?offset=0&limit=5&cat=1001&initial=${letter}`),
            // Network.get(`artist/list?offset=0&limit=5&cat=1002&initial=${letter}`),
            // Network.get(`artist/list?offset=0&limit=5&cat=1003&initial=${letter}`),
            // Network.get(`artist/list?offset=0&limit=5&cat=2001&initial=${letter}`),
            // Network.get(`artist/list?offset=0&limit=5&cat=2002&initial=${letter}`),
            // Network.get(`artist/list?offset=0&limit=5&cat=2003&initial=${letter}`),
            Network.get(`/artist/list?offset=0&limit=5&type=1&area=7&initial=${letter}`),
            // Network.get(`/artist/list?offset=0&limit=5&type=2&area=7&initial=${letter}`),
            // Network.get(`/artist/list?offset=0&limit=5&type=3&area=7&initial=${letter}`)
        ]).then(function (result) {
            // console.log(result);
            result.forEach(function (item) {
                letterArtists.push(...item.artists);
            })
            resolve(letterArtists);
        }).catch(function (err) {
            // console.log(err);
            reject(err);
        })
    })
}

export const getAllArtist = () => { 
    return new Promise(function (resolve,reject) {
        // let keys = ['热']
        let keys = [];
        // console.log(getHotArtist());
        // let list = [getHotArtist()];
        let list = [];
        for (let i = 65; i < 91; i++) {
            let char = String.fromCharCode(i);
            keys.push(char);
            list.push(getLetterArtist(char));
            // console.log(getLetterArtist(char));
        }
        Network.all(list).then(function (result) {
            // console.log(result);
            // axios.all可以接收多个Promise对象，当其全部为resolve时all方法中获得结果
            let obj = {};
            obj.keys = keys;
            obj.list = result;
            resolve(obj);
        }).catch(function (err) {
            reject(err);
        })
    })
    
}



export const getTopListDetail = () => Network.get('/toplist');
export const getSearchList = (data) => Network.get('search?type=1', data);
export const getSearchHot = () => Network.get('/search/hot');
