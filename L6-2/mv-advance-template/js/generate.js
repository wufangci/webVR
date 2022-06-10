AFRAME.registerComponent("generatefloor", {
  // for pool obj container
  schema: {
    pool: {
      type: "string",
    },
    zoffset: {
      default: 0,
    },
  },

  init: function () {
    this.start = false;
    this.el.sceneEl.addEventListener("start", () => {
      //generate floor
      this.gen();
      //set start
      this.start = true;
    });
  },

  tick: function (time, timeDelta) {
    //count on start
    if (this.start) {
      console.log(this.start);
      console.log("------------ 動畫開始");
      this.oldTime = time;
      this.start = false;
    }

    if (time - this.start > 5000) {
      console.log("------------ 開始時間超過5秒開始往後退");
      let position = this.el.getAttribute("position"); // 拿到定位
      position.z += 0.05; // 開始往後退 * timeDelta 可以增加速度的穩定
      if (position.z > 28) {
        console.log("------------ 歸零");
        // 如果往後退超過 28 讓 z 歸回原位
        position.z = 0;
      }
      this.el.setAttribute("position", position);
      console.log(position);
    }
  },

  gen: function () {
    let planepool = this.el.sceneEl.components.pool__plane;
    // or
    // let planepool = this.el.sceneEl.components['pool__plane'];

    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        let el = planepool.requestEntity();
        el.setAttribute("position", "0 0 " + i * -1);
        el.play();
      }, i * 200);
    }
  },
});
