import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import backgroundImg from './toilet.jpeg';
import Auth from './components/Auth/Auth.js';
import Header from './components/Header.js';
import Todos from './components/Todos/Todos.js';
import { useContext } from 'react';
import { UserContext } from './context/UserContext.js';

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App" style={{ backgroundImg: `url(${backgroundImg})` }}>
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/todos" component={Todos} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/todos" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
