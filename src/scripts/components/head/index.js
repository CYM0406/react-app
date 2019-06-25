

import "./index.scss"

import { NavBar, Icon } from "antd-mobile"

export class Head extends Component {
    goback = (show) => {
        const { dispatch, history } = this.context.props;
        console.log(document.referrer);
        if (show) {
            history.go(-1);
        }
    }
    goSearch = () => {
        const { history } = this.context.props;
        console.log(this);
        console.log(123)
        history.push("/search");
    }
    render() {
        const {
            title,
            show
        } = this.props;
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={show && <Icon type="left" />}
                    onLeftClick={() => this.goback(show)}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.goSearch} />,
                    ]}
                > {title}</NavBar>
            </div>

        )
    }
}

import PropTypes from "prop-types"
Head.contextTypes = {
    props: PropTypes.object
}
