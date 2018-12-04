import m from 'mithril';

import numberStore from './NumberStore';
import { increment, decrement } from './Actions';

m.mount(document.getElementById('mount'), {
    oninit : (vnode) => {
        vnode.state.number = numberStore.number;
    },

    oncreate : (vnode) => {
        numberStore.on('numberUpdated', () => {
            vnode.state.number = numberStore.number;
            m.redraw();
        });
    },

    view : (vnode) => {
        console.log('redraw');

        return m('main',
            m('h1', 'Mithril w/ Flux'),
            m('div',
                m('strong', 'Number: '),
                m('span', vnode.state.number)
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
            )
        );
    }
});
