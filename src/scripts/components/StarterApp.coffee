`/** @jsx React.DOM */`

Masthead = require("./Masthead.coffee")

StarterApp = React.createClass
  render: () ->
    `(
      <div className='main'>
        <Masthead title={this.props.name}>
          Welcome to React!
        </Masthead>
      </div>
    )`

module.exports = StarterApp
