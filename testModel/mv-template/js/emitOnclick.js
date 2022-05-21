// component name 需要全小寫

AFRAME.registerComponent("emitonclick", {
  schema: {},
  // 初始化
  init: function () {},
  // 更新
  update: function () {},
  // 移除
  remove: function () {},
  //
  tick: function () {},
  //事件
  events: {
    click: function () {
      /** emit()發送自定義 dom 事件
       *   emit('name',); https://aframe.io/docs/1.3.0/core/entity.html#emit-name-detail-bubbles
       */
      this.el.emit("startedPlayMusic");
      console.log("click");
    },
  },
});
