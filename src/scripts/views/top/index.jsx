
import { SearchBar } from "antd-mobile";
import { Head } from "@/scripts/Components/head"
import { connect } from "react-redux";
import { getfind } from "../../actions/find";
import { Link } from "react-router-dom";
import { List } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;


@connect(state => {
    console.log(state);
    return {
        ...state
    }
})
export class Top extends Component {
    componentWillMount() {
        const { dispatch, location } = this.props;
        dispatch(
            getfind({ url: "https://v1.itooi.cn/netease/album/newest" })
        )
    }



    render() {
        return (
            <div style={{ paddingTop: "30px" }}>
                <Head title="发现" show={true}></Head>

                {this.props.find.list.map((b, i) => {
                    return (
                        <div style={{ marginTop: "20px", backgroundColor: "#F8F8FF" }} key={i}>
                            <h2 className="el" style={{ fontSize: "18px", lineHeight: "50px" }}>专辑名称{b.name}</h2>
                            <img src={b.artist.picUrl} style={{ width: "100%", height: "auto" }} alt="" />

                            <p style={{ fontSize: "16px", lineHeight: "30px" }}>歌手：{b.artist.name}</p>
                            <p style={{ fontSize: "16px", lineHeight: "30px" }}>公司：{b.company}</p>
                        </div>
                    );
                })
                }
            </div >
        )
    }
}