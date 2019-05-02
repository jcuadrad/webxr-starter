var AFRAME = require('aframe');
var htmlTemp = require('../templates/hard-decision.html');

AFRAME.registerComponent('video-controls', {
    schema: {
        video: { type: 'selector' }
    },

    init: function () {
        this.element = this.el;
        this.setVideoListeners(this.element.attributes.src.value);
    },

    setVideoListeners: function(selector) {
        const video = document.getElementById(selector.split('#')[1]);

        // Add event listeners for video

        video.addEventListener('ended', () => {
            console.log("Video Ended");
            this.system.showHardDecision(htmlTemp);
        });
    }
});