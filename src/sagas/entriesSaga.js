import {take, put, call, fork} from 'redux-saga/effects'
import entriesTypes from '../actions/entries.actions'
import {populateEntries, populateEntriesDetails} from '../actions/entries.actions'
import axios from 'axios'

export function* getAllEntries(){
  yield take(entriesTypes.GET_ENTRIES);
  console.log('I need to get the entries now')
  const {data} = yield call(axios, 'http://localhost:3004/entries');
  console.log('entriesSaga:', data) //result.data
  yield put(populateEntries(data))
  
}

export function* getEntryDetails(id) {
  if(id !==1) {
    const {data} = yield call(axios, `http://localhost:3004/values/${id}`);
  
    console.log('DATA', data);
    yield put(populateEntriesDetails(id, data))
  }
}

export function* getAllEntriesDetails() {
  const {payload} = yield take(entriesTypes.POPULATE_ENTRIES);

  for (let index = 0; index < payload.length; index ++) {
    const entry = payload[index]
    yield fork(getEntryDetails, entry.id)
  }
}

//delete data
