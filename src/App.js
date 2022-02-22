import './App.css';
import Rooms from './rooms'
import Adults from './Adults';
import Children from './Children';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Buildingcompounent from './Buildingcompounent';

function App() {
  return (
    <div className="App " >
    <h4 className="text-primary" > <FontAwesomeIcon  icon={faUserGroup}/>choose number of <b>People</b></h4>
    <Buildingcompounent/>
      {/* <table className="table table-bordered" >
        <tbody className="text-primary">
          <tr>
            <Rooms/>
          </tr>
          <tr>
            <Adults/>
          </tr>
          <tr>
            <Children/>
          </tr>
        </tbody>
      </table> */}
      </div>
  );
}
export default App;
