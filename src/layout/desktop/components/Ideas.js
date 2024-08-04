import React, { Component } from "react";
import * as THREE from 'three';
import {useFrame} from 'react-three-fiber';
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

const style = {
    width: '90vw',
    height: '90vh' // we can control scene size by setting container dimensions
};

class WhereIdeas extends Component {
    constructor(props){
        super(props);
        console.log("WhereIdeas props:", props);
        this.state = {
            nas : 5
        }
    }

    componentDidMount() {
        this.window = window;
        this.sceneSetup();
        this.addLights();
        this.loadTheModel();
        this.startAnimationLoop();
        this.pageWidth = window.innerWidth;
        this.currentRotation = 0;
        this.lastChange = 0;
        this.frameRate = 25;
        this.direction = 1;


        this.pageHeight = window.innerHeight;
        this.currentYRotation = 0;
        this.lastYChange = 0;
        this.directionY = 1;

        window.addEventListener('resize', this.handleWindowResize);
        window.addEventListener('mousemove', this.handleRotation);
        //window.addEventListener('keydown', this.handleKeys);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        window.removeEventListener('mousemove', this.handleRotation);
        //window.removeEventListener('keydown', this.handleKeys);
        window.cancelAnimationFrame(this.requestID);
    }

    sceneSetup = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            45, // fov = field of view
            width/height , // 2.5 aspect ratio
            0.1, // near plane
            5000 // far plane
        );
        console.log(this.camera);
        this.camera.position.z = 600;
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setClearColor( 0x000000, 0 );
        this.renderer.setSize( width, height );
        this.mount.appendChild( this.renderer.domElement );
    };


    handleKeys = (event) =>{
        console.log(event);
        var entity = this.lights[0];
        var rotationSpeed = 0.01;
        var translationSpeed = 10;
        if(event.key == "z"){
            entity.rotation.z += rotationSpeed;
        }

        if(event.key == "x"){
            entity.rotation.x += rotationSpeed;
        }

        if(event.key == "c"){
            entity.rotation.y += rotationSpeed;
        }

        if(event.key == "v"){
            entity.rotation.z -= rotationSpeed;
        }

        if(event.key == "b"){
            entity.rotation.x -= rotationSpeed;
        }

        if(event.key == "n"){
            entity.rotation.y -= rotationSpeed;
        }

        if(event.key == "a"){
            entity.position.x += translationSpeed;
        }

        if(event.key == "s"){
            entity.position.y += translationSpeed;
        }

        if(event.key == "d"){
            entity.position.z += translationSpeed;
        }

        if(event.key == "q"){
            entity.position.x -= translationSpeed;
        }

        if(event.key == "w"){
            entity.position.y -= translationSpeed;
        }

        if(event.key == "e"){
            entity.position.z -= translationSpeed;
        }

        if(event.key == "g"){
            this.model.scale.x += 0.1;
        }

        if(event.key == "t"){
            this.model.scale.x -= 0.1;
        }

        if(event.key == "h"){
            this.model.scale.y += 0.1;
        }

        if(event.key == "y"){
            this.model.scale.y -= 0.1;
        }

        if(event.key == "j"){
            this.model.scale.z += 0.1;
        }

        if(event.key == "u"){
            this.model.scale.z -= 0.1;
        }

        if(event.key == "f"){
            this.camera.focus += 1;
        }

        if(event.key == "r"){
            this.camera.focus -= 1;
        }

        if(event.key == "k"){
            this.camera.fov += 1;
        }

        if(event.key == "i"){
            this.camera.fov -= 1;
        }

        if(event.key == "p"){
            console.log("Camera", this.camera);
            console.log("Light", this.lights);
            console.log("Camera Pos", this.camera.position);
            console.log("Camera Rotation", this.camera.rotation);
            console.log("Model Pos", this.model.position);
            console.log("Model Rotation", this.model.rotation);
            console.log("Model Scale", this.model.scale);
        }
    }

    handleRotation = (e) =>{
        if(Math.abs(this.lastChange-e.pageX) > 5){
            this.currentRotation = -0.3 * ((e.pageX-this.pageWidth/2)/this.pageWidth);
            this.lastChange = e.pageX;
            this.frameRate = this.props.animate?25:this.state.nas;
        }

        if(Math.abs(this.lastYChange-e.pageY) > 5){
            this.currentYRotation = -0.3 * ((e.pageY-this.pageHeight/2)/this.pageHeight);
            this.lastYChange = e.pageY;
            this.frameRate = this.props.animate?25:this.state.nas;
        }
    }

    loadTheModel = () => {
        const loader = new OBJLoader();
        loader.load(
            './3DModels/where_ideas.obj',
            ( object ) => {
                const boundingBox = new THREE.Box3().setFromObject(object);
                var center = boundingBox.getCenter(new THREE.Vector3());
                var mesh = new THREE.Mesh();
                object.position.x -= center.x + 20;
                object.position.y -= center.y;
                object.position.z -= center.z;
                mesh.add(object);
                this.scene.add( mesh );
                const el = this.scene.getObjectByName("Extrude.2");
                el.position.set(0, 0, 0);
                el.material.color.set(0xffffff); //A77B7B
                el.rotation.x = 0;
                el.rotation.y = 0;
                el.rotation.z = 0;
                this.model = mesh;
            },
             ( xhr ) => {

                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                this.props.onProgress(loadingPercentage);
            },
            ( error ) => {

            }
        );
    };

    addLights = () => {
        this.lights = [];
        this.lights[ 0 ] = new THREE.PointLight( 0x9f8080, 0.5, 0 );
        this.lights[ 1 ] = new THREE.PointLight( 0x9f8080, 0.5, 0 );
        this.lights[ 0 ].position.set( -110, 670, 380 );
        this.lights[ 1 ].position.set( -110, 0, 280 );
        this.scene.add( this.lights[ 0 ] );
        this.scene.add( this.lights[ 1 ] );
    };

    startAnimationLoop = async () => {
        var step = 0.005;
        if (this.model) {

            if(this.model.rotation.y > this.currentRotation){
                this.model.rotation.y -= step;
            }else if(this.model.rotation.y <= this.currentRotation){
                this.model.rotation.y += step;
            }


            if(this.model.rotation.x > this.currentYRotation){
                this.model.rotation.x -= step;
            }else if(this.model.rotation.x <= this.currentYRotation){
                this.model.rotation.x += step;
            }


            if(Math.abs(this.model.rotation.y - this.currentRotation)<=2*step && Math.abs(this.model.rotation.x - this.currentYRotation)<=2*step){
                this.frameRate = this.props.animate?25:this.state.nas;
            }

            if(Math.abs(this.model.rotation.y - this.currentRotation)<=2*step){
                this.model.rotation.y = this.currentRotation;
            }
            if(Math.abs(this.model.rotation.x - this.currentYRotation)<=2*step){
                this.model.rotation.x = this.currentYRotation;
            }
        }
        this.renderer.render( this.scene, this.camera );
        setTimeout( ()=> {
            this.rerun();
        }, 1000 / this.frameRate );
        
    };

    rerun = () => {
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    }

    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.renderer.setSize( width, height );
        this.camera.aspect = width / height;

        this.camera.updateProjectionMatrix();
    };

    render() {
        return <div style={style} ref={ref => (this.mount = ref)} />;
    }
}

class Ideas extends React.Component {
    constructor(props){
        super(props);
        console.log("Ideas props:", props);
    }
    state = {isMounted: true};

    render() {
        const {isMounted = true, loadingPercentage = 0} = this.state;
        return (
            <>
              {isMounted && <WhereIdeas animate={this.props.animate} onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
            </>
        )
    }
}

export default Ideas;