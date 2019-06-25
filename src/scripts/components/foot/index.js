

export const foots = [
    { txt: "音乐馆", path: "/app/home", name: "home", icon: "icon-yinyue", on: "home-on.png", off: "home-off.png" },
    { txt: "发现", path: "/app/top", name: "classify", icon: "icon-faxian" },
    { txt: "我", path: "/app/my", name: "my", icon: "icon-self" }
]

import "./index.scss"
import { Link, NavLink } from "react-router-dom"
import { Badge } from "antd-mobile"
export const Foot = () => {
    return (
        <footer>
            {
                foots.map((item, i) => {
                    return (
                        <div key={i}>
                            <NavLink to={item.path} activeClassName="nav-active" >
                                <i className={"iconfont icon " + item.icon} ></i>
                                <span> {item.txt}</span>
                            </NavLink>
                        </div>
                    )
                })
            }
        </footer>
    )
}