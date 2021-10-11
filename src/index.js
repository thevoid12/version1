import ReactDOM from 'react-dom';

import './index.css';
import App from './App'; //this is importing app.js file note: we should always omit the .js extension while importing   ./ means look in the same folder

ReactDOM.render(<App />, document.getElementById('root')); //the root here represents the id of the division tag present in the index.html file in public folder. a
//actually what happens in that render line is App component is rendered in the place where id is root(the html div tag)

