`/** @jsx React.DOM */`

Masthead = require("./Masthead.coffee")

StarterApp = React.createClass
  render: () ->
    `(
      <div className='main'>
        <Masthead title={this.props.name}>
          Gulp is used for orchestrating
        </Masthead>
      </div>
    )`

module.exports = StarterApp
