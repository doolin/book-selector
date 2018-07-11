import { combineReducers } from 'redux';
import BooksReducer from '../reducers/book_reducer';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
