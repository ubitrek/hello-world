import React from 'react';
import ReactDOM from 'react-dom';
import App, {MarkdownEditor,App1, Butt} from './App';


ReactDOM.render(<App />,  document.getElementById('root'));
ReactDOM.render(<Butt />,  document.getElementById('exter'));
ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById('dupa'));
ReactDOM.render(<App1 />,  document.getElementById('route'));