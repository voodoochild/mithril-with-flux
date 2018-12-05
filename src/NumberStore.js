import dispatcher from './Dispatcher';
import { EventEmitter } from 'events';
import { INCREMENT_NUMBER, DECREMENT_NUMBER } from './Actions';

let number = 0;

class NumberStore extends EventEmitter {
    constructor() {
        super();

        dispatcher.register(this.handleActions.bind(this));
    }

    handleActions(action) {
        switch (action.type) {
            case INCREMENT_NUMBER:
                number++;
                this.emit('numberUpdated');
                break;
            case DECREMENT_NUMBER:
                number--;
                this.emit('numberUpdated');
                break;
            default:
        }
    }

    getNumber() {
        return number;
    }
}

export default new NumberStore();
