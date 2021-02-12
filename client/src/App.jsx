import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/layout';
import { Home, About } from './components/pages';
import './assets/css/App.css';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </>
    </Router>
  );
};

export default App;
