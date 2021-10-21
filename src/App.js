import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Cart from "./screens/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store";

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
            </Switch>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
