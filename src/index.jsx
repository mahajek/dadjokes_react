import { render } from 'react-dom';
import React, { useState } from 'react';
import './style.css';

import { jokes } from './jokes';
import { Joke } from './Joke/index.jsx';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          id={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        ></Joke>
      ))}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
