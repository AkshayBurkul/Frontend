import './App.css';
import Layout from './components/Layout';
import Createstream from './components/Createstream';
import Viewstream from './components/Viewstream';


import { Switch,Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function App() {

  
  return (
    <div>
      <Layout/>

      <Switch>
        <Route exact path="/create" component={props => <Createstream {...props} />}/>
        <Route exact path="/view" component={props => <Viewstream {...props} />}/>
        
        <Redirect to="/create"/>
      </Switch>
     
    </div>
  );
}

export default App;
