import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Home} from "./components/Home/Home";
import {Footer} from "./components/footer/Footer";
import {Nav} from "./components/Nav/Nav";
import {useRoute, RouteProvider} from "./router";
import {Author} from "./components/Author/Author";
import {Naturalism, natureRouteGroup} from "./components/Gallerys/Naturalism/Naturalism";
import {Portraits, portraitRouteGroup} from "./components/Gallerys/Portraits/Portraits";
import {Events, eventsRouteGroup} from "./components/Gallerys/Events/Events";

function App() {

  const route = useRoute();

  return (
    <div className="App">


      <Nav routeName={route.name} />

      {route.name === "home" && <Home/>}
      {route.name === "author" && <Author/>}
      {natureRouteGroup.has(route) && <Naturalism route={route}/>}
      {portraitRouteGroup.has(route) && <Portraits route={route}/>}
      {eventsRouteGroup.has(route) && <Events route={route} />}


      <Footer routeName={route.name as string}/>

    </div>



  );


}


ReactDOM.render(
  <RouteProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RouteProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
