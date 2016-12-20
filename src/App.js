import React, { Component } from 'react';
import Remarkable from 'remarkable';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import { Button, Card, Row, Col } from 'react-materialize';

'use strict'

const App = () => {
    console.log("hello world");
    return <div>
	<h1>Hello World ++ !</h1>
	{ React.createElement(MarkdownEditor, null) }
	<Butt />
	<Search />
	<App1 />
  <TodoApp />
	</div>;
}
export default App


const divStyle = {
  color: 'blue',
};


class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type some *markdown* here!' };
    console.log(this.props);
  }

  handleChange() {
    this.setState({ value: this.refs.textarea.value });
  }

  getRawMarkup() {
    var md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    //console.log(this.props);
    return React.createElement(
      "div",
      { className: "MarkdownEditor",
      style: {color: 'blue'} },
      React.createElement(
        "h3",
        null,
        "Input"
      ),
      React.createElement("textarea", {
        onChange: this.handleChange,
        ref: "textarea",
        defaultValue: this.state.value }),
      React.createElement(
        "h3",
        null,
        "Output"
      ),
      React.createElement("div", {
        className: "content",
        style: {color: 'red'},
        dangerouslySetInnerHTML: this.getRawMarkup()
      }),
    );
  }
}

var click = function(props) {
    console.log(props);
    console.log('button on click');
    //console.log(React.Children.toArray(props.children));
}

const Butt = () => (
  <div>
    <Button floating large className='red' waves='light' icon='add' />
    <Button floating large className='blue' waves='light' icon='add' onClick={(props) => click(props)} />
  </div>
)



const Nav = () => (
  <div>
    <Link activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/address'>Address</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/address/instagram'>Instagram</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/about'>About</Link>&nbsp;
    <Link activeStyle={{color:'#53acff'}} to='/test.html'>Test</Link>
  </div>
)

const Home = () => <h1>Hello from Home!</h1>
const Address = (props) => <div><h1>We are located at 555 Jackson St.</h1>{props.children}</div>

const NotFound = () => (
  <h1>404.. This page is not found!!!</h1>)

const Container = (props) => {console.log(props); return <div>
  <Nav />
  {props.children}
</div> }

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>


class App1 extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

var Search = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onClick: function() {
        this.setState({ showResults: true });
    },
    render: function() {
        return (
            <div>
                <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? <Results /> : null }
            </div>
        );
    }
});

var Results = React.createClass({
    render: function() {
        return (
            <div id="results" className="search-results">
                Some Results
            </div>
        );
    }
});


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
