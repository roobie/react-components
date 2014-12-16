/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var TextInput = React.createClass({
  render: function() {
    var value = this.props.data[this.props.name];
    return (
      <input type="text"
             name={this.props.name}
             value={value}
             onChange={this.props.onChange} />
    );
    // {...this.props}
  }
});

module.exports = TextInput;
