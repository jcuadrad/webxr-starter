var AFRAME = require('aframe');

AFRAME.registerComponent('ui-listener', {
    init: function () {
        this.element = this.el;

        this.element.addEventListener('raycaster-intersected', () => {
            console.log('Hovering!');
            //this.element.setAttribute('scale', '1 1 0');
            console.log(this.element);
        })
    }
});