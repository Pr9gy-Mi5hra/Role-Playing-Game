// import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './rootReducer';
// // import GameComponent from './GameComponent';
// import container from './container';

// const store = createStore(rootReducer);

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <h1>Redux RPG Game</h1>
//         <container />
//       </div>
//     </Provider>
//   );
// };

// export default App;


// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import GameComponent from './GameComponent';
import './App.css'; // Optional: Add your CSS for styling

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <GameComponent />
      </div>
    </Provider>
  );
};

export default App;
