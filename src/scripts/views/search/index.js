
import { SearchBar } from "antd-mobile";
import { Head } from "@/scripts/Components/head"
import { connect } from "react-redux";
import { searchsong } from "../../actions/search";
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
export class SearchSong extends Component {
    change = () => {
        console.log(this.res.state.value);
        console.log("sfdsdf")
        var keywrod = this.res.state.value
        const { dispatch } = this.props;
        dispatch(
            searchsong({ url: "https://v1.itooi.cn/netease/search?keyword=" + keywrod + "&type=song&pageSize=20&page=0" })
        )
    }
    render() {
        return (
            <div>
                <Head title="搜索" show={true}></Head>
                <SearchBar style={{ paddingTop: "50px" }} placeholder="自动获取光标" ref={el => this.res = el} onBlur={this.change} />
                {this.props.searchsong.list.map((b, i) => {
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
        )
    }
}