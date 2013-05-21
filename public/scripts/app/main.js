			var camera, scene, renderer;
			var controls;
			var parent;

			var objects = [];

			init();
			animate();

			function init() {
				// create the camera
				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
				camera.position.z = 1800;
				// create the scene
				scene = new THREE.Scene();

				var element = document.createElement( 'div' );
				parent = new THREE.CSS3DObject( element );
				scene.add( parent );

				_.mixin(_.string.exports());
        var template = Handlebars.compile($("#ReadonlyCardTemplate").html());

				// add some elements
				for ( var i = 0; i < 100; i ++ ) {

		      var html = template();
		      var element = $.parseHTML(_.trim(html))[0];

					element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 4000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					parent.add( object );

					// put the object in the scene
					objects.push( object );
				}


				// create the renderer
				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.domElement.style.position = 'absolute';
				document.getElementById( 'container' ).appendChild( renderer.domElement );

				// create the controls
				controls = new THREE.TrackballControls( camera, renderer.domElement );
				controls.rotateSpeed = 0.5;
				controls.addEventListener( 'change', render );

				// on resize, update
				window.addEventListener( 'resize', onWindowResize, false );
			}


			// window resize
			function onWindowResize() {
				// reset the camera
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			// animate the scene
			function animate() {
				requestAnimationFrame( animate );
				TWEEN.update();
				// _.each(objects, function(v) {
				// 	v.rotation.x+=0.1;
				// });
				parent.rotation.y+=0.001;
				controls.update();
				render();
			}

			// render the scene
			function render() {
				renderer.render( scene, camera );
			}
