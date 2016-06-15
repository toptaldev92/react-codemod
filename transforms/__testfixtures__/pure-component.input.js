'use strict';

var React = require('React');

function render() {
  return <div/>;
}

class Pure extends React.Component {
  render() {
    return <div className={this.props.foo} />;
  }
}

class Impure extends React.Component {
  componentWillMount() {
    // such impure
  }
  render() {
    return <div className={this.props.foo} />;
  }
}

class ImpureWithRef extends React.Component {
  render() {
    return (
      <div>
        <span ref="spanasaurus" />
      </div>
    );
  }
}

var A = props => <div className={props.foo} />;
