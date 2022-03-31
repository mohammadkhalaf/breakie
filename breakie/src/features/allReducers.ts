
//test//


import { createAction, createReducer } from '@reduxjs/toolkit'
import { Breakie } from '../models/breakie'

const getAllBreakies = createAction<Breakie>('get All breakies')

//Actions att skicka med
const actions = { getAllBreakies}



const initialState: Breakie[] = []

const breakieReducer = createReducer(initialState, {
   
    //Lägg till breakie i initialState

    [getAllBreakies.toString()]: (state, action) => action.payload || null
    

})


export { actions, initialState, breakieReducer }
