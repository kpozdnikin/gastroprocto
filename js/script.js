$(document)
    .ready(function() {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;

        // create sidebar and attach to menu open
        $('.ui.sidebar').sidebar('attach events', '.toc.item');

        //smooth scroll
        $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
            var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                var top = $(scroll_el).offset().top;
                $('html, body').animate({ scrollTop: top}, 500); // анимируем скроолинг к элементу scroll_el
            }
            return false; // выключаем стандартное действие
        });

        var shape = $('.shape');
        var fadeIn = $('#blog-header, #blog-description, .intro');
        fadeIn.transition('fade in', '1500ms');

        var timerId = setInterval(function() {
            shape.shape('flip up');
        }, 1500);

        // lazy load images
        $('.image').visibility({
            type: 'image',
            transition: 'vertical flip in',
            duration: 500
        });
    });

/*

var aspect, camera, height, light, loader, material, renderer, scene, width;
width = window.innerWidth;
height = window.innerHeight;
aspect = width / height;
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(65, aspect, 1, 10000);
//camera.position.z = 1000;

renderer = new THREE.WebGLRenderer({
  alpha: true
});
renderer.setSize(width, height);

document.body.appendChild(renderer.domElement);

light = new THREE.DirectionalLight(0xffffff, 1.1);
light.position.set(-1, -50, 5);

scene.add(light);

camera.position.set(14, 18, 24);

camera.lookAt(new THREE.Vector3(-10, -10, -10));

//camera.rotation.z = 0;

loader = new THREE.ColladaLoader();
//controls = new THREE.OrbitControls( camera );
//controls.addEventListener( 'change', render );
//controls.update();

loader.options.convertUpAxis = true;
obj = new THREE.Object3D();

loader.load(
    // resource URL
    'model.dae',
    // Function when resource is loaded
    function(collada) {
        var dae = collada.scene;
      //collada.scene.scale.set(1, 1, 1);
      //scene.add(collada.scene);
        scene.add(obj);
        obj.add(dae);
        console.log(obj);
      return render();
    },
    // Function called when download progresses
    function ( xhr ) {
      // console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
    }
);


//animate();

function animate() {
  requestAnimationFrame(animate);
  camera.rotation.x += 0.01;
  camera.rotation.y += 0.01;
  camera.rotation.z += 0.01;

  renderer.render(scene, camera);
}

function changeX(event){
  var elem = event.target;
  obj.position.x = elem.value;
    render()
}

function changeY(event){
  var elem = event.target;
    obj.position.y = elem.value;
    render()
}

function changeZ(event){
  var elem = event.target;
    obj.position.z = elem.value;
    render()
}

function changeRX(event){
    var elem = event.target;
    obj.rotation.x = elem.value;
    render()
}

function changeRY(event){
    var elem = event.target;
    obj.rotation.x = elem.value;
    render()
}

function changeRZ(event){
    var elem = event.target;
    obj.rotation.x = elem.value;
    render()
}

function render() {
    renderer.render( scene, camera );

    console.log(camera.position.x);
    console.log(camera.position.y);
    console.log(camera.position.z);
    console.log("!!!!!!!!!!!!!!!!");
    console.log(camera.rotation.x);
    console.log(camera.rotation.y);
    console.log(camera.rotation.z);

}*/
