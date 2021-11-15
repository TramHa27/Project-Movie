import './App.css';
//Cấu hình routing
import { Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail'
import { HomeTemplate } from './templates/HomeTemplate';
//Thư viện giúp chuyển hướng trang ở các file không phải là component
import { createBrowserHistory } from 'history';
import  {CheckoutTemplate} from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Register from './pages/Register/Register'
import { AdminTemplate } from './templates/AdminTemplate';
import Films from './pages/Admin/Films/Films';
import AddFilm from './pages/Admin/AddFilms/AddFilm';
import EditFilm from './pages/Admin/Edit/EditFilm';
import ShowTime from './pages/Admin/ShowTime/ShowTime';
import Users from './pages/Admin/Users/Users';
import AddUser from './pages/Admin/AddUser/AddUser';




export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>

      <Switch>

        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/detail/:id" exact component={Detail} />
        {/* <HomeTemplate exact path="/baitaptonghop" component={BaiTapTongHop} /> */}
        <Route path="/register" exact component={Register} />
        <CheckoutTemplate path="/checkout/:id" exact component={Checkout} />
        <UserTemplate path="/login" exact Component={Login} />

        <AdminTemplate exact path="/admin/adduser" component={AddUser} />
        <AdminTemplate exact path="/admin/users" component={Users} />
        <AdminTemplate exact path="/admin/films/showtime/:id" component={ShowTime} />
        <AdminTemplate exact path="/admin/films/edit/:id" component={EditFilm} />
        <AdminTemplate exact path="/admin/addfilm" component={AddFilm} />
        <AdminTemplate exact path="/admin/films" component={Films} />
        <AdminTemplate exact path="/admin" component={Users}/>

        <HomeTemplate exact path="/" component={Home} />
        
      </Switch>

    </Router>
  );
}

export default App;
