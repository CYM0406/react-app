import "./index.scss"
import { Link } from "react-router-dom"
import { List, NavBar, Icon, ActionSheet, Toast } from "antd-mobile";
import { Head } from "@/scripts/Components/head"
const Item = List.Item;
const Brief = Item.Brief;

const showActionSheet = () => {
    const BUTTONS = ['从相机选择修改头像', '修改昵称', '登陆', '取消'];
    ActionSheet.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        message: '手机操作',
        maskClosable: true,
        'data-seed': 'logId',
        wrapProps: {
            onTouchStart: e => e.preventDefault(),
        }
    },
        (buttonIndex) => {
            // 各种函数 
            switch (buttonIndex) {
                case 0:
                    Toast.success("调取摄像头");
                    break;
                case 1:
                    Toast.success("修改昵称");
                    break;
                case 2:
                    location.href = "#/login"
                    break;


            }
            console.log(buttonIndex);
            // Toast.success(`${BUTTONS[buttonIndex]} success`);
        });
}
export class My extends Component {

    state = {
        imgs: [

        ]
    }
    render() {
        return (
            <div className="my" style={{ paddingTop: "50px" }}>
                <Head title="个人中心" show={true}></Head>
                <div>
                    <Link to={"/"}>
                        <div className="my-top"><img className="touxiang" src="https://static.darryring.com/images/2018-01-23/1516702728.jpg" alt="" />
                        </div>
                        <div className="my-name">
                            <span>张强笨蛋</span>
                        </div>
                    </Link>
                </div>

                <ul className="list">
                    <li>
                        <Link to={"/app/my"}>
                            <img src={require('../../../assets/images/shoucang.png')} alt="" />
                            <p>收藏</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/app/my"}>
                            <img src={require('../../../assets/images/dianzan.png')} alt="" />
                            <p>点赞</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/app/my"}>
                            <img src={require('../../../assets/images/xihuan.png')} alt="" />
                            <p>喜欢</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/app/my"}>
                            <img src={require('../../../assets/images/zuijin.png')} alt="" />
                            <p>最近</p>
                        </Link>
                    </li>
                </ul>

                <div className="my-gedan">
                    <p> 自建歌单</p>
                    <List className="my-list">
                        <Item arrow="horizontal" thumb="http://y.gtimg.cn/music/photo_new/T003R300x300M000002KfhWo06pm70.jpg" multipleLine>
                            默认歌单 <Brief>18首</Brief>
                        </Item>
                    </List>
                </div>
            </div >

        )
    }
}