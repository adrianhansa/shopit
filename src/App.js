import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Cart from "./screens/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Register from "./screens/Register";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Container>
            <Switch>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={Cart} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
