import React, { Component, PropTypes as T } from 'react'
import { LabeledInput, Button } from "../../components/index.js"
import { Link } from 'react-router'
import request from "superagent"
import cookie from "react-cookie"
import api from "../../api.js"


export default class Login extends Component {
  state = { userEmail: "", userPassword: "" }

  showWarning = (message) => {
    console.log (message)
  }

  submit = (event) => {
    // console.log ("email=" + this.state.userEmail + "|password=" + this.state.userPassword)
    request
      .post ("http://" + api.host + api.auth_call)
      .type('form')
      .send ({ "email": this.state.userEmail, "password": this.state.userPassword })
      .set ("Accept", "application/json")
      .set ("passcode", api.passcode)
      .set ("clientID", api.clientID)
      .end ( (err, res) => {
        if (res.status === 200) {
          const code = res.body.code
          const email= res.body.email
          //get auth from code
          if (code !== null && code !== undefined) {
            request
              .post ("http://" + api.host + api.token_call)
              .type('form')
              .send ({ "code": code, "redirect_uri": "", "client_id": api.clientID, "grant_type": "authorization_code" })
              .set ("Accept", "application/json")
              .end ( (err, res) => {
                if (res.status == 200){
                  cookie.save('token', res.body.data.access_token)
                  cookie.save('token_type', res.body.data.token_type)
                  cookie.save('login_email', email)
                }
                else {
                  this.showWarning ("用户登录失败！请重新登陆")
                }
              })
          }
        } else {
          this.showWarning ("用户登录失败！请重新登陆")
        }

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
      <div className="LoginBox">2222
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
