import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import product from './testProduct'


const initialState: any = {
    product: product
}

const editSlice = createSlice({
    name: 'Edit',
    initialState,
    reducers: {
        update(state, action: PayloadAction<any>) {
            const newParams = action.payload
            state.product = { ...state.product, ...newParams };
        },
        reset(state) {
            state.product = {}
        }
    }
})

export const { update, reset } = editSlice.actions

export default editSlice.reducer