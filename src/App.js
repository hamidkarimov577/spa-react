import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFounded from "./pages/NotFounded";
import Category from "./pages/Category";





function App() {
  return (
    <div>
      <Header />
      <main className="container content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
          <Route path="/category/:name" component={Category} />
          <Route component={NotFounded}/>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
