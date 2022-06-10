// component name 需要全小寫

AFRAME.registerComponent("generatefloor", {
  schema: {},
  // 初始化
  init: function () {
    // 拿到目前的 el 在往上拿是 sceneEl(a-scene) 拿到 event name https://aframe.io/docs/1.3.0/core/entity.html#sceneel
    this.el.sceneEl.addEventListener("startedPlayMusic", () => {
      this.generate();
    });
  },
  tick: function (time, timeDelta) {
    // let el6 = planePoolSix.requestEntity();
    // this.start 點擊開始才真的開始

    if (this.start) {
      this.oldTime = time;
      this.start = false;
    }

    if (time - this.startTime > 3000) {
      // let ell = planePool.requestEntity();
      let position = this.el.getAttribute("position"); // 拿到定位
      position.x += 0.1; // * timeDelta 可以增加速度的穩定
      if (position.x >= 30) {
        console.log("hi-----------");
        position.x = 0;
      }
      this.el.setAttribute("position", position);
      console.log(position);
    }

    // console.log("position", position);
    // if (position.z > 20) {
    //   position.z = 0.1;
    //   position.z -= 0.05;
    //   this.el.setAttribute("position", position);
    // }

    // return this.el.setAttribute("position", position);
    // position.z += 0.05;
    // this.el.setAttribute("position", position);
  },
  //事件
  generate: function () {
    /**
     *  # html
     *    pool__plane="
            mixin: plane_m; 
            size: 10;
            container: #plane_group
          "
     */

    let planePool = this.el.sceneEl.components.pool__plane; // get pool
    let floorSum = 200;

    for (let i = 0; i < floorSum; i++) {
      setTimeout(() => {
        let el = planePool.requestEntity();
        el.setAttribute("position", `0 0 ${i * -1}`);
        el.play(); // pool 裡面有放動畫，要使用 play
      }, i * 200);
    }
  },
  /**
   *  @function tick
   *  @information 每次更新會進到這個 function
   */
});
