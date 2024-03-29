import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Alerts, Navbar } from './components/layout';
import { Home, About } from './components/pages';
import { Login, Register } from './components/auth';
import { ContactState } from './context/contact';
import { AuthState } from './context/auth';
import { AlertState } from './context/alert';
import { PrivateRoute } from './components/routing';
import setAuthToken from './utils/setAuthToken';
import './assets/css/App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
