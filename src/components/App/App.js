import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import GuestList from '../GuestList/GuestList';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm';

function App() {
  let [guestList, setGuestList] = useState([]);
  
  //On load, get guests
  useEffect(() => {
    addGuests()
  }, [])

  const addGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }

  return (
    <div className="App">
      <Header />
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <GuestForm
        newGuestName={newGuestName}
        setNewGuestName={setNewGuestName}
        newGuestMeal={newGuestMeal}
        setNewGuestMeal={setNewGuestMeal}
        handleSubmit={handleSubmit}
      />
      <GuestList list={guestList} />
      <DinnerSupplies list={guestList} />
      <Footer />
    </div>
  );
}

export default App;
