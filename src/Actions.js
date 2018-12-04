import dispatcher from './Dispatcher';

export const INCREMENT_NUMBER = 'INCREMENT_NUMBER';
export const DECREMENT_NUMBER = 'DECREMENT_NUMBER';

export function increment() {
    dispatcher.dispatch({
        type : INCREMENT_NUMBER
    });
}

export function decrement() {
    dispatcher.dispatch({
        type : DECREMENT_NUMBER
    });
}
