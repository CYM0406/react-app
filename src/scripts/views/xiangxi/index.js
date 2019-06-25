
import { Head } from "@/scripts/Components/head"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;


import { getsong } from "../../actions/xiangxi";
import { getQuery } from "@/utils"

@connect(state => {
    console.log(state);
    return {
        ...state
    };
})
export class Xiangxi extends Component {
    state = {
        song: "",
    }
    componentWillMount() {
        const { dispatch, location } = this.props;
        var songname = getQuery(location.search).songname;
        var songid = getQuery(location.search).songid;
        console.log(getQuery(location.search))
        this.setState({
            song: songname
        })
        console.log(songname)
        dispatch(
            getsong({ url: "https://v1.itooi.cn/netease/song/artist?id=" + songid + "" })
        )
    }
    render() {
        const { song } = this.state
        return (
            <div style={{ marginTop: "45px" }}>
                <Head title={song} show={true}></Head>
                <div>
                    <div>
                        {this.props.xiangxi.list.map((b, i) => {
                            return (
                                <Link to={"/gequ?cid=" + b.id + "&songname=" + b.al.name} key={i}>
                                    < div className="my-gedan" >
                                        <List className="my-list">
                                            <Item arrow="horizontal" thumb={b.al.picUrl} multipleLine>
                                                {b.al.name} <Brief>{b.ar[0].name}</Brief>
                                            </Item>
                                        </List>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div >
        )
    }
}