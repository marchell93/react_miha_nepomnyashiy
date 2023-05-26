import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const Book = (props) => {
  return (
    <div>
      <h2>Hello, {props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </div>
  );
  // React.createElement('div', {}, [
  //   React.createElement('h2', {}, props.name),
  //   React.createElement('p', {}, props.year),
  //   React.createElement('p', {}, props.price),
  // ])
}

const App = () => {
  return (
  <div>
    <Book name='JS' year='2018' price='1000' />
    <Book name='React' year='2020' price='5000' />
    <Book name='Vue' year='2019' price='3000' />
  </div>
  );
  // 
  // React.createElement('div', {}, [
  //   React.createElement('h1', {id: 'hello', className: 'class1'}, 'Hello from react'),
  //   React.createElement(Book),
  //   React.createElement(Book),
  //   React.createElement(Book),
//   ])
}

// ReactDOM.render(React.createElement(App), document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
