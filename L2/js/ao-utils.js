
AFRAME.registerComponent('ao', { 
    init: function () {
        let mesh = this.el.getObject3D('mesh');
        if (mesh) {
            let geometry = mesh.geometry;
            if (geometry) {
                geometry.addAttribute( 'uv2', new THREE.BufferAttribute( geometry.attributes.uv.array, 2 ) );
            }
        }
    }
});
