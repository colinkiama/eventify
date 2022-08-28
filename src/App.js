import React from 'react';
import HeaderBar from './components/HeaderBar';
import { Routes, Route } from "react-router-dom";
import * as Pages from './pages';
import './App.css';
import { BasketContext } from './BasketContext';

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
      }
    }
  }

  handleItemChange(payload) {
    // Handle changes to tiers in basket items
    console.log("Event Ticket Tier Selection Changed:", payload);
    let basketItems = this.state.basket.items;
    let itemIndex = basketItems.findIndex((x) => x.ticketType === payload.item.ticketType);

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

  handleItemDecrement(index, payload, basketItems) {
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
    console.log("")
    if (index === -1) {
      this.setState(state => ({
        basket: {
          ...state.basket,
          items: basketItems.concat({
            ...payload.item,
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
      <BasketContext.Provider value={this.state.basket}>
        <HeaderBar title="Eventify" />
        <Routes>
          <Route path="/" element={<Pages.Home />} />
          <Route path="event/:eventId" element={<Pages.Event />} />
          <Route path="checkout" element={<Pages.Checkout />} />
          <Route path="confirmation" element={<Pages.OrderConfirmation />} />
        </Routes>
      </BasketContext.Provider>
    )
  }
}

export default App;
