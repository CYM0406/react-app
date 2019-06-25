const defaultState = {
    list: [],
}

export default (state = defaultState, action) => {
    console.log(action);

    switch (action.type) {
        case "getgequ":
            return { ...state, list: action.list }
            break;

        default:
            return state;
            break;
    }

}