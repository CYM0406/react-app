import { Head } from "@/scripts/Components/head"
import { InputItem, WhiteSpace, Button } from "antd-mobile"
import "./index.scss"
import axios from "axios"

export const telReg = /^1(3|5|7|8|9)\d{9}$/
export const codeReg = /^\d{4}$/

var timer = null
export class Login extends Component {
    state = {
        codeFlag: true,
        telFlag: true,
        txt: "获取验证码",
        count: 180
    }
    checktel = (usertel) => {
        this.setState({
            codeFlag: !telReg.test(usertel)
        })
    }
    checkcode = (usercode) => {
        this.setState({
            telFlag: !codeReg.test(usercode)
        })
    }

    getcode = () => {

        timer = setInterval(() => {
            if (this.state.count && this.state.count > 0) {
                this.setState({
                    count: --this.state.count,
                    txt: this.state.count + "s后继续",
                    codeFlag: true,
                })
            } else {
                clearInterval(timer);
                timer = null;
                this.setState({
                    txt: "获取验证码",
                    codeFlag: false,
                    count: 180
                })
            }
        }, 1000)
        var mobile = this.usertel.state.value
        axios.post("/react/getcode", {
            mobile
        }).then(res => {
            console.log(res);
        })
    }

    login = () => {
        axios.post("/react/testcode", { mobile: this.usertel.state.value, code: this.usercode.state.value }).then(res => {
            console.log(res);
            if (!!res.data.type) {
                this.props.history.push("/app/my");
                var userInfo = { token: res.data.token }
                sessionStorage.userInfo = JSON.stringify(userInfo)
            } else {
                delete sessionStorage['userInfo']
            }
        })
    }

    render() {
        const {
            codeFlag,
            telFlag,
            txt,
            count
        } = this.state
        return (
            <div>
                <Head title="登陆" show={true}></Head>
                <WhiteSpace size="xl" />
                <InputItem
                    type="tel"
                    clear
                    placeholder="请输入手机号"
                    onChange={this.checktel}
                    // ref={el => this.code = el}
                    ref={el => this.usertel = el}
                >手机号码</InputItem>
                <WhiteSpace size="xl" />
                <div className="dw">
                    <InputItem
                        type="tel"
                        ref={el => this.usercode = el}
                        clear
                        className="l-btn"
                        placeholder="请输入验证码"
                        onChange={this.checkcode}
                    >验证码</InputItem>
                    <Button type="warning" inline ref={el => this.code = el} disabled={codeFlag} onClick={this.getcode}>{txt}</Button> <WhiteSpace />
                </div>
                <WhiteSpace />
                <Button type="primary" disabled={telFlag} onClick={this.login}>登陆</Button> <WhiteSpace />
            </div >
        )
    }
    ComponentWillUnmount() {
        clearInterval(timer);
    }

}