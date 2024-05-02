import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { date } from 'yup'

export default class SimpleExampleFromClass extends Component {
  
    state = {
        firstName : "",
        lastName : "",
        data : []
    }

    componentDidMount()
    {
        fetch("https://fakestoreapi.com/products")
        .then(y=>y.json())
        .then(y=> {
            this.setState({...this.state,data:y})
        })

    }

  render() {

    console.log(this.state.data);
    return (
      <div>SimpleExampleFromClass</div>
    )
  }
}
