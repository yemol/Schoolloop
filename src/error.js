class Error {
  constructor (status, msg) {
    this.status = ""
    this.msg = ""
  }

  showErrorToClient (res) {
    res.status = this.status
    res.send (msg)
    res.end()
  }
}
