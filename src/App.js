import './App.css';
import SideBar from './components/Sidebar/SideBar';
import { Dashboard } from './components/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="components d-flex">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
