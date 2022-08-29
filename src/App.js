import React from 'react';
import HeaderBar from './components/HeaderBar';
import { Routes, Route } from "react-router-dom";
import * as Pages from './pages';
import './App.css';

const BasketChangeType = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basket: {
        items: [],
        onItemIncrement: (item) => this.handleItemChange({
          type: 'increment',
          item: item
        }),
        onItemDecrement: (item) => this.handleItemChange({
          type: 'decrement',
          item: item
        }),
        onQuantityChange: (payload) => this.handleQuantityChange(payload),
        canIncrement: (item) => this.checkIfCanIncrement(item),
        canDecrement: (item) => this.checkIfCanDecrement(item),
        setTierQuantity: (item) => this.setTierQuantity(item)
      }
    }
  }

  setTierQuantity(item) {
    let basketItem = this.state.basket.items.find(x => x.ticketType === item.type);
    if (!basketItem) {
      return "0";
    }

    return `${basketItem.quantity}`;
  }

  checkIfCanDecrement(item) {
    return this.state.basket.items.findIndex(x => x.ticketType === item.type) > -1;
  }

  checkIfCanIncrement(item) {
    let index = this.state.basket.items.findIndex(x => x.ticketType === item.type); 
    if (index > -1) {
      return this.state.basket.items[index].quantity < 8;
    }

    return true;
  }

  handleQuantityChange(payload) {
    // Handle changes to tiers in basket items
    let basketItems = this.state.basket.items;
    let itemIndex = basketItems.findIndex((x) => x.ticketType === payload.item.type);

    switch (payload.type) {
      case BasketChangeType.DECREMENT:
        if (itemIndex === -1) {
          return;
        }

        this.handleItemDecrement(itemIndex, payload, basketItems.slice());
        break;
      case BasketChangeType.INCREMENT:
        this.handleItemIncrement(itemIndex, payload, basketItems.slice());
        break;
      default:
        break;
    } 
  }

  handleItemDecrement(index, _, basketItems) {
    const nextQuantity = basketItems[index].quantity - 1; 

    if (nextQuantity === 0) {
      this.setState(state => ({
        basket: {
          ...state.basket,
          items: basketItems.filter((_, itemIndex) => itemIndex !== index)
        }
      }));

      return;
    }

    basketItems[index] = {
      ...basketItems[index], 
      quantity: nextQuantity
    }

    this.setState(state => ({
      basket: {
        ...state.basket,
        items: basketItems
      }
    }));
  }
  
  handleItemIncrement(index, payload, basketItems) {
    if (index === -1) {
      this.setState(state => ({
        basket: {
          ...state.basket,
          items: basketItems.concat({
            ticketType: payload.item.type,
            eventId: payload.item.eventId,
            quantity: 1
          })
        }
      }));

      return;
    }

    const nextQuantity = basketItems[index].quantity + 1; 

    if (nextQuantity > 8) {
      return;
    }

    basketItems[index] = {
      ...basketItems[index], 
      quantity: nextQuantity
    }

    this.setState(state => ({
      basket: {
        ...state.basket,
        items: basketItems
      }
    }));
  }

  render() {
    return (
      <>
        <HeaderBar title="Eventify" />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="event/:eventId" element={<Pages.Event basket={this.state.basket} />} />
          <Route path="checkout" element={<Pages.Checkout basket={this.state.basket} />}  />
          <Route path="confirmation" element={<Pages.OrderConfirmation />} />
        </Routes>
      </>
    )
  }
}

export default App;
