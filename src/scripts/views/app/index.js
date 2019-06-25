

import "./index.scss";

import { Route, Switch, Redirect } from "react-router-dom"

import { My } from "../my/index.jsx";
import { Home } from "../home/index.jsx";
import { Top } from "../top/index.jsx";
import { Xiangxi } from "../xiangxi";
import { Gequ } from "../gequ";
import { SearchSong } from "../search";
import { Foot } from "@/scripts/components/foot"

export class App extends Component {
    render() {

        return (
            <div style={{ width: "100%", height: "100%" }}>
                <Switch>
                    <Route path="/app" exact render={() => (<Redirect to="/app/home" />)} />
                    <Route path="/app/my" component={My} />
                    <Route path="/app/home" component={Home} />
                    <Route path="/app/top" component={Top} />
                </Switch>
                <Foot></Foot>
            </div>
        )
    }
}