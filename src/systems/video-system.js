var AFRAME = require('aframe');
const stories = require('../utils/modules.js');

AFRAME.registerSystem('video-controls', {
    init: function() {
        this.videos = document.getElementsByTagName("video");
        this.videosphere = document.getElementsByTagName('a-videosphere')[0];

        console.log(stories);
    },

    showHardDecision: function(template) {
        this.el.insertAdjacentHTML('beforeend', template);
    }
});