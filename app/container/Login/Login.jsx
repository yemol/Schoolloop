import React, { Component, PropTypes as T } from 'react'
import { LabeledInput, Button } from "../../components/index.js"
import { Link } from 'react-router'
import request from "superagent"

const API = "localhost:2001"

export default class Login extends Component {
  state = { userEmail: "", userPassword: "" }

  submit = (event) => {
    // console.log ("email=" + this.state.userEmail + "|password=" + this.state.userPassword)
    request
      .post ("http://" + API + "/remote/auth")
      .type('form')
      .send ({ "email": this.state.userEmail, "password": this.state.userPassword })
      .set ("Accept", "application/json")
      .end ( (err, res) => {
        console.log ("response is:" + res.error)
      })
  }

  updateEmail = (value) => {
    this.state.userEmail = value
  }

  updatePassword = (value) => {
    this.state.userPassword = value
  }

  render () {
    return (
      <div className="LoginBox">
        <span className="circle-mask"><i className="fa fa-user fa-5x"></i></span>
          <LabeledInput id="userEmail" placeholder="邮箱" label="fa fa-envelope fa-lg fa-fw" inputType="text" update={::this.updateEmail}  />
          <LabeledInput id="userPassword" placeholder="密码" label="fa fa-lock fa-lg fa-fw" inputType="password" update={::this.updatePassword} />
          <Button id="signIn" name="signIn" value="登录" onClick={this.submit} />
          <Link className="additional_link_left" to="/forgotpassword">忘记密码</Link>
          <Link className="additional_link_right" to="/signup">注册登录</Link>
      </div>

    )
  }
}
