var AFRAME = require('aframe');
// const stories = require('../utils/modules.js');

AFRAME.registerSystem('game-state', {
    // Initial state.
    schema: {
        state: { default: 'intro', oneOf: ['intro', 'scene1', 'scene2', 'deepdive'] },
        currentScene: { type: 'string', default: 'intro'},
    },

    init: function() {
        console.log("Initial Game State: ", this.data);
    },
    
    update: function (oldData) {
        console.log('Update Called.');
        var data = this.data;
        console.log(oldData.state, data.state);
        if (oldData.state !== data.state) {
            console.log('Setting state: ', data.state);
            this.setState(data.state);
            return;
        }
        console.log('Calling Update State.');
        this.updateState();
    },

    updateState: function () {
        var data = this.data;
        var el = this.el;
        console.log('UpdateStateCalled, ', data.state);

        switch (data.state) {
            /**
             * Application-specific code goes under here!
             */
            case 'intro': {
                // Transition to next state depending on condition.
                if (this.data.currentScene !== 'intro') {
                    el.setAttribute('game-state', {state: this.data.currentScene});
                }
            }
                break;
            case 'scene1': {
                // Transition to next state depending on condition.
                el.setAttribute('game-state', 'state', 'scene1');
            }
                break;
            case 'scene2': {
                // Transition to next state depending on condition.
                el.setAttribute('game-state', 'state', 'scene2');
            }
                break;
            case 'deepdive': {
                // Transition to next state depending on condition.
                el.setAttribute('game-state', 'state', 'deepdive');
            }
                break;
            default: {
                console.log('Unknown state', data.state);
            }
        }
    },

    setState: function (state) {
        console.log("SetState called: ", state)
        var el = this.el;
        var states = this.schema.state.oneOf;
        if (this.updatingState) { return; }
        if (states.indexOf(state) === -1) {
            console.log('Unknown state', state);
        }
        // Remove all states.
        states.forEach(function (state) {
            el.removeAttribute(state);
        });
        el.setAttribute(state, '');
    }
});