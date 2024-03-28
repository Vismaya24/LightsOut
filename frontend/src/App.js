import logo from './logo.svg';
import './App.css';
import Home from "./Component/HomePage";
import LoginPage from './Component/LoginPage';
import Signup from './Component/SignUp';
import ViewMovie from './Component/ViewMovie';
import NavBar from './Component/NavBar';
import Watch from './Component/watch';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddMovie from './Component/AddMovie';
import ForgotPassword from './Component/ForgotPW';
import New from './Component/New';
import Watchlist from './Component/Watchlist';



function App() {
  return (
    <Router>
      <div className="App">
      
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/new" component={New}></Route>
        <Route exact path="/addMovies" component={AddMovie}></Route>
        <Route exact path="/editMovies/:id" component={AddMovie}></Route>
        {/* <Route exact path="/watchlist" component={Watchlist}></Route> */}
        <Route exact path="/watch" component={Watch}></Route>
        <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        <Route exact path="/viewmovie/:id" component={ViewMovie} />
       
      </Switch>
  </div>
    </Router>
    
  );
}
export default App;
