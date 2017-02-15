<html>
  <head>
    <title>DEMO2</title>
    <script src="//cdnjs.cloudflare.com/ajax/libs/three.js/r67/three.js"></script>
    <script src="//js.leapmotion.com/leap-0.6.2.min.js"></script>
    <script src="//js.leapmotion.com/leap-plugins-0.1.6.1.js"></script>
    <script src="//js.leapmotion.com/leap.rigged-hand-0.1.4.min.js"></script>

  </head>

  <body>
    <div id=output></div>
  </body>

  <script type="text/javascript">
    
	  
    var output = document.getElementById('output');
        
    // Set up the controller:
    Leap.loop({background: true}, {
        hand: function(hand){                
              }
    });
 
    visualizeHand = function(controller){
        // The leap-plugin file included above gives us a number of plugins out of the box
        // To use a plugins, we call `.use` on the controller with options for the plugin.
        // See js.leapmotion.com/plugins for more info


        //CREATE SCENE
        //var scene = new THREE.scene();


        controller.use('playback', {
            // This is a compressed JSON file of preprecorded frame data
            recording: 'paper1.json.lz',
            // How long, in ms, between repeating the recording.
            timeBetweenLoops: 10000,
            pauseOnHand: true
        }).on('riggedHand.meshAdded', function(handMesh, leapHand){
            handMesh.material.opacity = 1;
        });

        var overlay = controller.plugins.playback.player.overlay;
        overlay.style.right = 0;
        overlay.style.left = 'auto';
        overlay.style.top = 'auto';
        overlay.style.padding = 0;
        overlay.style.bottom = '13px';
        overlay.style.width = '180px';
		
        controller.use('riggedHand', {
            scale: 1.3           
        });

        var camera = controller.plugins.riggedHand.camera;
        camera.position.set(0,20,-25);
        camera.lookAt(new THREE.Vector3(0,3,0));
    };
    visualizeHand(Leap.loopController);
  </script>
</html>
