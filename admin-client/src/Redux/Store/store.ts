import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Edit/productEdit.ts'

export const store = configureStore({
    reducer: {
        update: productReducer
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


// export default store