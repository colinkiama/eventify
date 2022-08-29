import React from 'react';

export const BasketContext = React.createContext({ 
	items: [], 
	onItemIncrement: (item) => {},
	onItemDecrement: (item) => {},
	canIncrement: () => false,
	canDecrement: () => false
});
