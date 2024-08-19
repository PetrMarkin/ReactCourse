import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ControlledForm from './pages/ControlledForm/ControlledForm';
import UncontrolledForm from './pages/UncontrolledForm/UncontrolledForm';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/uncontrolled' element={<UncontrolledForm />} />
        <Route path='/controlled' element={<ControlledForm />} />
      </Routes>
    </div>
  );
}
