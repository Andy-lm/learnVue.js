import Network from './network';

export const getBanner = () => Network.get('banner?type=2');
export const getPersonalized = () => Network.get('personalized?limit=6');
export const getNewAlbum = () => Network.get('/album/newest');
export const getNewSong = () => Network.get('/personalized/newsong');
export const getPlayList = (data) => Network.get('/playlist/detail', data);
export const getAlbum = (data) => Network.get('/album',data);