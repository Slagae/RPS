<script type="text/javascript">
    
        
    // Set up the controller:
    Leap.loop({background: true}, {
        hand: function(hand){}
    });
 
    visualizeHand = function(controller){
        //CREATE SCENE
        //var scene = new THREE.scene();


        controller.use('playback', {
            // This is a compressed JSON file of preprecorded frame data
            recording: 'https://raw.githubusercontent.com/Slagae/RPS/master/paper1.json',
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