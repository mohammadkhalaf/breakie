import { configureStore } from '@reduxjs/toolkit'
import { breakieReducer } from './features/breakieReducers'

// configureStore skapar en Redux Store
const store = configureStore({
    // enda inställningen vi behöver är en root reducer
    reducer: breakieReducer
})

export type RootState = ReturnType<typeof store.getState>
/* State/store ser ut så här: { products, cart, user, view } */

export { store }