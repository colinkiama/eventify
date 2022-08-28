import HeaderBar from './components/HeaderBar';
import { Routes, Route, Link } from "react-router-dom";
import * as Pages from './pages';
import './App.css';


function App() {
  return (
    <>
      <HeaderBar title="Eventify"/>
      <Routes>
        <Route path="/" element={<Pages.Home/>} />
        <Route path="event" element={<Pages.Event/>} />
        <Route path="checkout" element={<Pages.Checkout/>} />
        <Route path="confirmation" element={<Pages.OrderConfirmation/>} />
      </Routes>
    </>
  );
}

export default App;
