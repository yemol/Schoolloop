import React, { Component, PropTypes as T } from 'react'
import { LabeledInput, Button } from "../../components/index.js"
import { Link } from 'react-router'

export default class Login extends Component {
  render () {
    return (
      <div className="LoginBox">
        <span className="circle-mask"><i className="fa fa-user fa-5x"></i></span>
        <form>
          <LabeledInput id="userEmail" name="userEmail" placeholder="邮箱" label="fa fa-envelope fa-lg fa-fw" inputType="text" />
          <LabeledInput id="userPassword" name="userPassword" placeholder="密码" label="fa fa-lock fa-lg fa-fw" inputType="password" />
          <Button id="signIn" name="signIn" value="登录" />
          <Link className="additional_link_left" to="/forgotpassword">忘记密码</Link>
          <Link className="additional_link_right" to="/signup">注册登录</Link>
        </form>
      </div>)
  }
}
