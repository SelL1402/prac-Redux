import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './Counter';


const store = createStore(reducer);

const {dispatch, subscribe, getState} = store

const update = () => {
  
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

const {inc, dec, rnd} = bindActionCreators( actions, dispatch);


// document.getElementById('inc').addEventListener('click', inc);
// document.getElementById('dec').addEventListener('click', dec);
// document.getElementById('rnd').addEventListener('click', ()=>{
//   const value = Math.floor(Math.random() * 10);
//   rnd(value);
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter
      counter={getState().value}
      inc={inc}
      dec={dec}
      rnd={()=>{
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }}
    />
  </React.StrictMode>
);


