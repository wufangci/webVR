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
  // 更新
  update: function () {},
  // 移除
  remove: function () {},
  //
  tick: function () {},
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
    let planePoolTwo = this.el.sceneEl.components.pool__planetwo; // get pool
    let planePoolThree = this.el.sceneEl.components.pool__planethree; // get pool
    let planePoolFour = this.el.sceneEl.components.pool__planefour; // get pool
    let planePoolFive = this.el.sceneEl.components.pool__planefive; // get pool
    let planePoolSix = this.el.sceneEl.components.pool__planesix; // get pool

    let floorSum = 30;
    // let el = planePool.requestEntity();
    for (let i = 0; i <= floorSum; i++) {
      let el = planePool.requestEntity();
      let el2 = planePoolTwo.requestEntity();
      let el3 = planePoolThree.requestEntity();
      let el4 = planePoolFour.requestEntity();
      let el5 = planePoolFive.requestEntity();
      let el6 = planePoolSix.requestEntity();

      setTimeout(() => {
        el.setAttribute("position", `0 0 ${-1 * i}`);
        el.play(); // pool 裡面有放動畫，要使用 play
      }, i * 100);
      setTimeout(() => {
        el2.setAttribute("position", `0 0 ${-1 * i}`);
        el2.play(); // pool 裡面有放動畫，要使用 play
      }, i * 200);
      setTimeout(() => {
        el3.setAttribute("position", `0 0 ${-1 * i}`);
        el3.play();
      }, i * 300);
      setTimeout(() => {
        el4.setAttribute("position", `0 0 ${-1 * i}`);
        el4.play();
      }, i * 200);

      setTimeout(() => {
        el5.setAttribute("position", `0 0 ${-1 * i}`);
        el5.play();
      }, i * 100);
      setTimeout(() => {
        el6.setAttribute("position", `0 0 ${-1 * i}`);
        el6.play();
      }, i * 100);
    }
  },
});
