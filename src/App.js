import logo from './logo.svg';
import HeaderBar from './components/HeaderBar';
import * as Pages from './pages';


import './App.css';

console.log ("Event Page:", Pages.HomePage);

function App() {
  return (
    <>
      <HeaderBar title="Eventify"/>
      <Pages.HomePage/>
      {/*<Pages.EventPage/>*/}
      {/*<Pages.CheckoutPage/>*/}
      {/*<Pages.OrderConfirmationPage/>*/}
    </>
  );
}

export default App;
