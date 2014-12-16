/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var TextInput = require('./TextInput.react.jsx');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var inputTypes = ["button", "checkbox", "color", "date", "datetime", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];

var ReactTestApp = React.createClass({
  getInitialState: function () {
    return {
    };
  },
  handleChangeFor: function (what) {
    return (function (event) {
      var nextState = {};
      nextState[what] = event.target.value;
      this.setState(nextState);
    }).bind(this);
  },
  render: function() {
    var self = this;
    return (
      <div className='main'>
      <img src={imageURL} />
      {inputTypes.map(function (type, index) {
        return <input value={self.state[type]}
                      type={type}
                      name={type}
                      key={index}
                      onChange={self.handleChangeFor(type)} />
      })}

        <code>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </code>
      </div>
    );
  }
});
React.renderComponent(<ReactTestApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactTestApp;
