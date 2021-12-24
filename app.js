/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles":{
      "number":{
        "value":200,
        "density":{
          "enable":true,
          "value_area":1200
        }
      },
      "color":{
        "value":"#fff"
      },
      "shape":{
        "type":"circle",
        "stroke":{
          "width":0,
          "color":"#000000"
        },
        "polygon":{
          "nb_sides":5
        }
      },
      "opacity":{
        "value":.5,
        "random":false,
        "anim":{
          "enable":false,
          "speed":2,
          "opacity_min":0,
          "sync":false
        }
      },
      "size":{
        "value":3,
        "random":true,
        "anim":{
          "enable":false,
          "speed":20,
          "size_min":0,
          "sync":false
        }
      },
      "line_linked":{
        "enable": false,
        "distance":100,
        "color":"#ffffff",
        "opacity":1,
        "width":1
      },
      "move":{
        "enable":true,
        "speed":2,
        "direction":"none",
        "random":false,
        "straight":false,
        "out_mode":"out",
        "attract":{
          "enable":false,
          "rotateX":3000,
          "rotateY":3000
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":true,
          "mode":"grab"
        },
        "onclick":{
          "enable":true,
          "mode":"push"
        },
        "resize":true
      },
      "modes":{
        "grab":{
          "distance":100,
          "line_linked":{
            "opacity":1
          }
        },
        "bubble":{
          "distance":200,
          "size":80,
          "duration":0.4
        },
        "repulse":{
          "distance":200,
          "duration":0.4
        },
        "push":{
          "particles_nb":4
        },
        "remove":{
          "particles_nb":2
        }
      }
    },
    "retina_detect":true,
    "config_demo": {
      "hide_card": true,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);