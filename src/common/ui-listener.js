var AFRAME = require('aframe');

AFRAME.registerComponent('ui-listener', {
    schema: {
        type: { type: 'string', default: 'hotspot', oneOf: ['hotspot, decision-button'] }
    },
    init: function () {
        this.element = this.el;
        let type = this.data.type;
        console.log(type);

        if (type === 'hotspot') {
            this.hotspotEventListeners();
        } else if (type === 'decision-button') {
            console.log('Element ID: ', this.element.id);
            this.element.addEventListener('click', () => {
                this.el.sceneEl.setAttribute('game-state', { currentScene: this.element.id});
            })
        }
    },

    hotspotEventListeners: function() {
        // Add event listeners for raycaster intersection
        this.element.addEventListener('raycaster-intersected', () => {
            this.element.setAttribute('scale', '1.3 1.3 0');
        });

        this.element.addEventListener('raycaster-intersected-cleared', () => {
            this.element.setAttribute('scale', '1 1 0');
        })
    }
});