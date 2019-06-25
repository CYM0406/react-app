import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Login } from "./login";
import PropTypes from "prop-types";
import { App } from "./app";
import { connect } from "react-redux";
import { SearchSong } from "./search";
import { Xiangxi } from "./xiangxi";
import { Gequ } from "./gequ";
@connect()
export class IndexView extends Component {
    render() {
        console.log(this.props);
        return (
            <Router>
                <div id="main">
                    <Route path="" exact component={Layout}></Route>
                </div>
            </Router>
        )
    }
}

export class Layout extends Component {
    getChildContext() {
        return {
            props: this.props
        }
    }
    render() {
        return (
            <Switch>
                <Route path="/" exact render={() => (<Redirect to="/app" />)} />
                <Route path="/app" component={App}></Route>
                <Route path="/search" component={SearchSong} />
                <Route path="/xiangxi" component={Xiangxi} />
                <Route path="/gequ" component={Gequ} />
                <Route path="/login" component={Login}></Route>
            </Switch >
        )
    }
}

Layout.childContextTypes = {
    props: PropTypes.object
}