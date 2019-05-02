var AFRAME = require('aframe');

AFRAME.registerComponent('scene2', {
    init: function () {
        console.log('State Component Scene 2 Added.')
        this.el.setAttribute('game-state', 'scene2');
    },
});