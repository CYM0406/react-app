


import ReactDOM, { render } from "react-dom";  //  ReactDOM.render
import { IndexView } from "./views";


const rootEle = document.getElementById("app");

import { Provider } from "react-redux"

import store from "./store";

export class ReduxDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <IndexView />
            </Provider>
        )
    }
}

const hotRender = () => {
    render(
        <ReduxDemo />,
        rootEle
    )
}
hotRender();

