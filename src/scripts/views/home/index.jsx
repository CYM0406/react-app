
import { Head } from "@/scripts/components/head"

// import store from "../../store"
import { connect } from "react-redux";
import { getlist } from "../../actions";
import { Link } from "react-router-dom";
import "./index.scss"


import {

    Carousel,

} from "antd-mobile";
@connect(state => {
    console.log(state);
    return {
        ...state
    };
})
export class Home extends Component {

    componentWillMount() {
        const { dispatch } = this.props;
        console.log(this.props)
        console.log(123)

        dispatch(
            getlist({ url: "https://v1.itooi.cn/netease/artist/top?page=0&pageSize=30" })
        )
        console.log(this.props.list)
    }
    render() {

        return (
            <div style={{ marginTop: "45px" }}>
                <Head title="推荐" show={true}></Head>
                <Carousel autoplay={true} infinite>
                    {this.props.list.banner.map((b, i) => {
                        return (
                            <Link
                                to={"/"}
                                key={i}
                                style={{
                                    display: "inline-block",
                                    width: "100%",
                                }}
                            >
                                <img
                                    src={b}
                                    alt=""
                                    style={{ width: "100%", verticalAlign: "top" }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event("resize"));
                                    }}
                                />
                            </Link>
                        );
                    })}
                </Carousel>

                <div>
                    <h2 className="gedan">热门歌单</h2>
                    <div>
                        {this.props.list.list.map((b, i) => {
                            return (
                                <div
                                    key={i}
                                    style={{
                                        width: "50%",
                                        float: "left",
                                        position: "relative"
                                    }}>
                                    <Link to={"/xiangxi?songname=" + b.name + "&songid=" + b.id + ""} >
                                        <img
                                            src={b.picUrl}
                                            alt=""
                                            style={{ width: "90%", width: "169px", height: "139px", margin: "1% 1% 0 5%", verticalAlign: "top", }}
                                            onLoad={() => {
                                                window.dispatchEvent(new Event("resize"));
                                            }}
                                        />

                                        <p className="el" style={{ fontSize: " 16px", textAlign: "center", margin: "5px 0 0 10px", color: "#666666" }}>{b.name}</p>
                                    </Link>
                                </div>

                            );
                        })}
                    </div>
                </div>

            </div>
        )
    }
}