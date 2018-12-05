import dispatcher from './Dispatcher';
import { EventEmitter } from 'events';

let lastAction;

class LastActionStore extends EventEmitter {
    constructor() {
        super();

        dispatcher.register(this.handleActions.bind(this));
    }

    handleActions(action) {
        lastAction = action;
        this.emit('lastActionUpdated');
    }

    getLastAction() {
        return lastAction;
    }
}

export default new LastActionStore();
