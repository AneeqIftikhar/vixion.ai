import React, { Component } from "react";
import * as THREE from 'three';
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

const style = {
    width: '90vw',
    height: '70vh' // we can control scene size by setting container dimensions
};

class WhereIdeas extends Component {
    componentDidMount() {
        this.window = window;
        this.sceneSetup();
        this.addLights();
        this.loadTheModel();
        this.startAnimationLoop();
        this.pageWidth = window.innerWidth;
        this.currentRotation = 0;
        this.lastChange = 0;
        this.frameRate = 15;
        window.addEventListener('resize', this.handleWindowResize);
        window.addEventListener('mousemove', this.handleRotation);
        window.addEventListener('keydown', this.handleKeys);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        window.removeEventListener('mousemove', this.handleRotation);
        window.removeEventListener('keydown', this.handleKeys);
        window.cancelAnimationFrame(this.requestID);
    }

    sceneSetup = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            60, // fov = field of view
            width/height , // 2.5 aspect ratio
            0.1, // near plane
            3000 // far plane
        );
        console.log(this.camera);
        this.camera.position.z = 500; //set(new THREE.Vector3(0, 0, 600));
        this.camera.position.y = 0;
        this.camera.position.x = -1000;
        //this.camera.rotateX(-0.2);
        //this.camera.rotateY(-0.3);
        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        this.renderer.setClearColor( 0x000000, 0 );
        this.renderer.setSize( width, height );
        this.mount.appendChild( this.renderer.domElement );
    };


    handleKeys = (event) =>{
        console.log(event);
        if(event.key == "z"){
            this.model.rotation.z += 0.01;
        }

        if(event.key == "x"){
            this.model.rotation.x += 0.01;
        }

        if(event.key == "c"){
            this.model.rotation.y += 0.01;
        }

        if(event.key == "v"){
            this.model.rotation.z -= 0.01;
        }

        if(event.key == "b"){
            this.model.rotation.x -= 0.01;
        }

        if(event.key == "n"){
            this.model.rotation.y -= 0.01;
        }

        if(event.key == "a"){
            this.model.position.x += 2;
        }

        if(event.key == "s"){
            this.model.position.y += 2;
        }

        if(event.key == "d"){
            this.model.position.z += 2;
        }

        if(event.key == "q"){
            this.model.position.x -= 2;
        }

        if(event.key == "w"){
            this.model.position.y -= 2;
        }

        if(event.key == "e"){
            this.model.position.z -= 2;
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

        if(event.key == "p"){
            console.log("Camera Pos", this.camera.position);
            console.log("Camera Rotation", this.camera.rotation);
            console.log("Model Pos", this.model.position);
            console.log("Model Rotation", this.model.rotation);
            console.log("Model Scale", this.model.scale);
        }
    }


    handleRotation = (e) =>{
        if(Math.abs(this.lastChange-e.pageX) > 5){
            this.currentRotation = 0.2 * (e.pageX/this.pageWidth);
            this.lastChange = e.pageX;
            this.frameRate = 15;
        }
    }

    // Code below is taken from Three.js OBJ Loader example
    // https://threejs.org/docs/#examples/en/loaders/OBJLoader
    loadTheModel = () => {
        const loader = new OBJLoader();
        loader.load(
            './3DModels/where_ideas.obj',
            ( object ) => {
                var box = new THREE.Box3().setFromObject( object );
                var center = new THREE.Vector3();
                box.getCenter( center );
                object.position.sub( center ); // center the model
                console.log(center);
                this.scene.add( object );
                const el = this.scene.getObjectByName("Extrude.2");
                el.position.set(-1490, -744, -1206);
                el.material.color.set(0xffffff); //A77B7B
                el.rotation.x = 0.27;
                el.rotation.y = 0.1263;
                el.rotation.z = -0.04;
                el.scale.x = 4.2;
                el.scale.y = 4.1;
                el.scale.z = 2.3;
                

                // make this element available inside of the whole component to do any animation later
                this.model = el;
                //this.model.rotateOnAxis(new THREE.Vector3(0,1,0), 0.2);
                console.log("model totation", this.model.rotation);
            },
            // called when loading is in progresses
             ( xhr ) => {

                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                console.log( ( loadingPercentage ) + '% loaded' );

                // update parent react component to display loading percentage
                this.props.onProgress(loadingPercentage);
            },
            // called when loading has errors
             ( error ) => {

                console.log( 'An error happened:' + error );

            }
        );
    };

    addLights = () => {
        const lights = [];

        // set color and intensity of lights
        lights[ 0 ] = new THREE.PointLight( 0xA77B7B, 1.5, 0 );
        lights[ 1 ] = new THREE.AmbientLight( 0xA77B7B, 0.3, 0 );
        //lights[ 2 ] = new THREE.PointLight( 0xA77B7B, 1, 0 );

        // place some lights around the scene for best looks and feel
        lights[ 0 ].position.set( -300, 1200, -100 );
        lights[ 1 ].position.set( 0, 1000, 600 );
        //lights[ 2 ].position.set( 1200, 1200, -600 );

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        //this.scene.add( lights[ 2 ] );
    };

    delay = ms => new Promise(res => setTimeout(res, ms));
    startAnimationLoop = async () => {
        // slowly rotate an object
        var step = 0.01;
        if (this.model) {
            if(this.model.rotation.y <= this.currentRotation){
                //this.model.rotation.y += step;
            }else if(this.model.rotation.y > this.currentRotation){
                //this.model.rotation.y -= step;
            }

            if(Math.abs(this.model.rotation.y - this.currentRotation)<=2*step){
                this.model.rotation.y = this.currentRotation;
                this.frameRate = 5;
            }
          //this.model.rotation.x = this.model.rotation.y = this.model.rotation.z = Math.sin(this.currentRotation);
        }
        this.renderer.render( this.scene, this.camera );

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        // await this.delay(50);
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

        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        this.camera.updateProjectionMatrix();
    };

    render() {
        return <div style={style} ref={ref => (this.mount = ref)} />;
    }
}

class Ideas extends React.Component {
    state = {isMounted: true};

    render() {
        const {isMounted = true, loadingPercentage = 0} = this.state;
        return (
            <>
              {isMounted && <WhereIdeas onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
            </>
        )
    }
}

export default Ideas;

/*

import React, { Component } from "react";
import * as THREE from 'three';
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

const style = {
    width: '100vw',
    height: '100vh' // we can control scene size by setting container dimensions
};

class WhereIdeas extends Component {
    componentDidMount() {
        this.window = window;
        this.sceneSetup();
        this.addLights();
        this.loadTheModel();
        this.startAnimationLoop();
        this.pageWidth = window.innerWidth;
        this.currentRotation = 0;
        this.lastChange = 0;
        this.frameRate = 15;
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
            30, // fov = field of view
            width/height , // 2.5 aspect ratio
            0.1, // near plane
            5000 // far plane
        );
        console.log(this.camera);
        this.camera.position.x = -300;
        this.camera.position.y = 200;
        this.camera.position.z = 1310;
        this.camera.rotation.x = -0.18;
        this.camera.rotation.y = -0.33;
        this.camera.rotation.z = -0.06;
        //this.camera.rotateX(-0.2);
        //this.camera.rotateY(-0.3);
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
            this.currentRotation = -0.2 * (e.pageX/this.pageWidth);
            this.lastChange = e.pageX;
            this.frameRate = 15;
        }
    }

    // Code below is taken from Three.js OBJ Loader example
    // https://threejs.org/docs/#examples/en/loaders/OBJLoader
    loadTheModel = () => {
        const loader = new OBJLoader();
        loader.load(
            './3DModels/where_ideas.obj',
            ( object ) => {
                var box = new THREE.Box3().setFromObject( object );
                var center = new THREE.Vector3();
                box.getCenter( center );
                object.position.sub( center ); // center the model
                console.log(center);
                this.scene.add( object );
                const el = this.scene.getObjectByName("Extrude.2");
                el.position.set(0, 0, 0);
                el.material.color.set(0xffffff); //A77B7B
                el.rotation.x = 0;
                el.rotation.y = 0;
                el.rotation.z = 0;
                el.scale.x = 1.2;
                el.scale.y = 1.2;
                el.scale.z = 1.5;
                

                // make this element available inside of the whole component to do any animation later
                this.model = el;
                //this.model.rotateOnAxis(new THREE.Vector3(0,1,0), 0.2);
                console.log("model totation", this.model.rotation);
            },
            // called when loading is in progresses
             ( xhr ) => {

                const loadingPercentage = Math.ceil(xhr.loaded / xhr.total * 100);
                console.log( ( loadingPercentage ) + '% loaded' );

                // update parent react component to display loading percentage
                this.props.onProgress(loadingPercentage);
            },
            // called when loading has errors
             ( error ) => {

                console.log( 'An error happened:' + error );

            }
        );
    };

    addLights = () => {
        this.lights = [];

        // set color and intensity of lights
        this.lights[ 0 ] = new THREE.PointLight( 0x9f8080, 1.5, 0 );
        //lights[ 1 ] = new THREE.AmbientLight( 0xA77B7B, 0.3, 0 );
        //lights[ 2 ] = new THREE.PointLight( 0xA77B7B, 1, 0 );

        // place some lights around the scene for best looks and feel
        //lights[ 0 ].position.set( -300, 1200, -100 );
        this.lights[ 0 ].position.set( -110, 670, 140 );
        //lights[ 1 ].position.set( 0, 1000, 600 );
        //lights[ 2 ].position.set( 1200, 1200, -600 );

        this.scene.add( this.lights[ 0 ] );
        //this.scene.add( this.lights[ 1 ] );
        //this.scene.add( lights[ 2 ] );
    };

    delay = ms => new Promise(res => setTimeout(res, ms));
    startAnimationLoop = async () => {
        // slowly rotate an object
        var step = 0.01;
        if (this.model) {
            if(this.model.rotation.y > this.currentRotation){
                this.model.rotation.y -= step;
            }else if(this.model.rotation.y <= this.currentRotation){
                this.model.rotation.y += step;
            }

            if(Math.abs(this.model.rotation.y - this.currentRotation)<=2*step){
                this.model.rotation.y = this.currentRotation;
                this.frameRate = 5;
            }
          //this.model.rotation.x = this.model.rotation.y = this.model.rotation.z = Math.sin(this.currentRotation);
        }
        this.renderer.render( this.scene, this.camera );

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        // await this.delay(50);
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

        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        this.camera.updateProjectionMatrix();
    };

    render() {
        return <div style={style} ref={ref => (this.mount = ref)} />;
    }
}

class Ideas extends React.Component {
    state = {isMounted: true};

    render() {
        const {isMounted = true, loadingPercentage = 0} = this.state;
        return (
            <>
              {isMounted && <WhereIdeas onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
            </>
        )
    }
}

export default Ideas;

*/


/*

import React, { Component } from "react";
import * as THREE from 'three';
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

const style = {
    width: '100vw',
    height: '100vh' // we can control scene size by setting container dimensions
};

class WhereIdeas extends Component {
    componentDidMount() {
        this.window = window;
        this.sceneSetup();
        this.addLights();
        this.loadTheModel();
        this.startAnimationLoop();
        this.pageWidth = window.innerWidth;
        this.currentRotation = 0;
        this.lastChange = 0;
        this.frameRate = 15;
        this.direction = 1;
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
            30, // fov = field of view
            width/height , // 2.5 aspect ratio
            0.1, // near plane
            5000 // far plane
        );
        console.log(this.camera);
        this.camera.position.x = -300;
        this.camera.position.y = 200;
        this.camera.position.z = 1310;
        this.camera.rotation.x = -0.18;
        this.camera.rotation.y = -0.33;
        this.camera.rotation.z = -0.06;
        //this.camera.rotateX(-0.2);
        //this.camera.rotateY(-0.3);
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
            this.currentRotation = -0.2 * (e.pageX/this.pageWidth);
            this.lastChange = e.pageX;
            this.frameRate = 15;
        }
    }

    // Code below is taken from Three.js OBJ Loader example
    // https://threejs.org/docs/#examples/en/loaders/OBJLoader
    loadTheModel = () => {
        const loader = new OBJLoader();
        loader.load(
            './3DModels/where_ideas.obj',
            ( object ) => {
                var box = new THREE.Box3().setFromObject( object );
                var center = new THREE.Vector3();
                box.getCenter( center );
                object.position.sub( center ); // center the model
                console.log(center);
                this.scene.add( object );
                const el = this.scene.getObjectByName("Extrude.2");
                el.position.set(0, 0, 0);
                el.material.color.set(0xffffff); //A77B7B
                el.rotation.x = 0;
                el.rotation.y = 0;
                el.rotation.z = 0;
                el.scale.x = 1.2;
                el.scale.y = 1.2;
                el.scale.z = 1.5;
                

                // make this element available inside of the whole component to do any animation later
                this.model = el;
                //this.model.rotateOnAxis(new THREE.Vector3(0,1,0), 0.2);
                console.log("model totation", this.model.rotation);
            },
            // called when loading is in progresses
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
        this.lights[ 0 ] = new THREE.PointLight( 0x9f8080, 1.5, 0 );
        this.lights[ 0 ].position.set( -110, 670, 140 );
        this.scene.add( this.lights[ 0 ] );
    };

    startAnimationLoop = async () => {
        var step = 0.005;
        var moveStep = 0.5;
        if (this.model) {
            if(this.model.rotation.y > this.currentRotation){
                moveStep = 0;
                this.model.rotation.y -= step;
            }else if(this.model.rotation.y <= this.currentRotation){
                moveStep = 0;
                this.model.rotation.y += step;
            }

            if(Math.abs(this.model.rotation.y - this.currentRotation)<=2*step){
                this.model.rotation.y = this.currentRotation;
                moveStep = 0.5;
                this.frameRate = 5;
            }

            // if(moveStep > 0){
            //     if(this.camera.position.y + moveStep >= 205){
            //         this.direction = -1;
            //     }

            //     if(this.camera.position.y - moveStep <= 195){
            //         this.direction = 1;
            //     }
            //     this.camera.position.y += this.direction * moveStep;
            // }
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
    state = {isMounted: true};

    render() {
        const {isMounted = true, loadingPercentage = 0} = this.state;
        return (
            <>
              {isMounted && <WhereIdeas onProgress={loadingPercentage => this.setState({ loadingPercentage })} />}
            </>
        )
    }
}

export default Ideas;

*/