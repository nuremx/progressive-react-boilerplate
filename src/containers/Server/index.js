import React, { Component } from 'react'
import axios from 'axios'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import './style.pcss'

class Home extends Component {
  static propTypes = {}

  state = {
    code: null,
  }

  componentDidMount() {
    setInterval(() => {
      axios
        .get('http://localhost:8080/extract')
        .then(({ data }) => data.code && this.setState({ code: data.code }))
        .catch((error) => this.setState({ error }))
    }, 4000)
  }

  render() {
    const {
      state: { code },
    } = this

    return (
      <div className="app">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Demo for code extraction (server)
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="content">
          {code && (
            <div>
              <Card>
                <CardContent>
                  The code is: <strong>{code}</strong>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
