
import { Head } from "@/scripts/Components/head"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;


import { getgequ } from "../../actions/gequ";


import { getQuery } from "@/utils"
import { getgeci } from "../../actions/geci";
import { AutoComplete } from "_antd@3.19.7@antd";

@connect(state => {
    console.log(state);
    return {
        ...state
    };
})

export class Gequ extends Component {
    state = {
        song: "",
    }
    componentWillMount() {
        const { dispatch, location } = this.props
        console.log(getQuery("123"));
        console.log(123123);
        var songname = getQuery(location.search).songname;
        this.setState({
            song: songname
        });
        var id = getQuery(location.search).cid
        console.log(id)
        dispatch(
            getgequ({
                url: "https://v1.itooi.cn/netease/song?id=" + id + ""
            })
        )
        dispatch(
            getgeci({
                url: "https://v1.itooi.cn/netease/lrc?id=" + id + ""
            })
        )
    }
    render() {
        const { song } = this.state
        return (
            <div style={{ paddingTop: "45px", width: "100%", height: "100%", }}>
                <Head title={song} show={true}></Head>
                {
                    this.props.gequ.list.map((b, i) => {
                        return (
                            <div
                                key={i}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: "relative",
                                    overflow: "hidden",
                                    textAlign: "center"
                                }}>
                                <img
                                    src={b.al.picUrl}
                                    alt=""
                                    style={{ width: "auto", height: "100%", opacity: .2, verticalAlign: "top", }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event("resize"));
                                    }}
                                />
                                <h2 className="el" style={{ position: "absolute", top: "60px", fontSize: "40px", color: "#333", left: 0, right: 0, margin: "auto", zIndex: "9999", }}>{b.al.name}</h2>
                                <p style={{ position: "absolute", top: "110px", fontSize: "20px", color: "#666666", left: 0, right: 0, margin: "auto" }}>{b.ar[0].name}</p>
                                <img src={b.al.picUrl} className="move-in spin" style={{ position: "absolute", left: "0", right: "0", bottom: "0", top: "0", margin: "auto", zIndex: "9999", width: "40%", height: "25%", borderRadius: "50%" }} alt="" />
                                <p className="el" style={{ fontSize: " 16px", textAlign: "center", margin: "5px 0 0 10px", color: "#333" }}>{b.name}</p>
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}