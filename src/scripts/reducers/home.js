const defaultState = {
    banner: [
        "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1416349.jpg",
        "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1406051.jpg",
        "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1410330.jpg",
        "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1405604.jpg",
        "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1402840.jpg",
    ],
    list: [],
}

export default (state = defaultState, action) => {
    console.log(action);

    switch (action.type) {


        case "getlist":
            return { ...state, list: action.list }
            break;

        default:
            return state;
            break;
    }

}