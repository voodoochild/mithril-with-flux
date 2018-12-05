import m from 'mithril';

import numberStore from './NumberStore';
import lastActionStore from './LastActionStore';
import { increment, decrement } from './Actions';

lastActionStore.on('lastActionUpdated', () =>
    console.log(">>> ACTION", lastActionStore.getLastAction())
);

const FizzBuzz = {
    oninit : (vnode) => {
        vnode.state.text = '';

        vnode.state.updateText = () => {
            const number = numberStore.getNumber();

            let text;

            if (number % 3 === 0 && number % 5 === 0) {
                text = 'Fizzbuzz';
            } else if (number % 3 === 0) {
                text = 'Fizz';
            } else if (number % 5 === 0) {
                text = 'Buzz';
            } else {
                text = '';
            }

            if (text !== vnode.state.text) {
                vnode.state.text = text;
                m.redraw();
            }
        };
    },

    oncreate : (vnode) => {
        numberStore.on('numberUpdated', vnode.state.updateText);
    },

    onremove : (vnode) => {
        numberStore.off('numberUpdated', vnode.state.updateText);
    },

    view : (vnode) => {
        const { text } = vnode.state;

        return text.length ? m("div", text) : null;
    }
};

const Home = {
    oninit : (vnode) => {
        vnode.state.number = numberStore.getNumber();

        vnode.state.updateNumber = () => {
            vnode.state.number = numberStore.getNumber();
        };
    },

    oncreate : (vnode) => {
        numberStore.on('numberUpdated', vnode.state.updateNumber);
    },

    onremove : (vnode) => {
        numberStore.off('numberUpdated', vnode.state.updateNumber);
    },

    view : (vnode) => {
        console.log('redraw');

        const { number } = vnode.state;

        return m('main',
            m('h1', 'Mithril w/ Flux'),
            m('div',
                m('strong', 'Number: '),
                m('span', number)
            ),
            m('div',
                m('button', {
                    onclick : (e) => {
                        e.redraw = false;
                        increment();
                    }
                }, '++'),
                m('button', {
                    onclick : (e) => {
                        e.redraw = false;
                        decrement();
                    }
                }, '--')
            ),
            m(FizzBuzz)
        );
    }
};

m.mount(document.getElementById('mount'), Home);
