// 幫使用者開啟瀏覽器自動播放聲音
/**
 * event control https://aframe.io/docs/1.3.0/introduction/javascript-events-dom-apis.html#sidebar
 * sound method https://aframe.io/docs/1.3.0/components/sound.html
 */
AFRAME.registerComponent("firstsound", {
  init: function () {
    let sound = this.el.components.sound;
    let soundloaded = false;
    this.el.addEventListener("sound-loaded", function () {
      soundloaded = true;
    });
    // event
    window.addEventListener("click", triggerSound, false);
    window.addEventListener("touchstart", triggerSound, false);

    function triggerSound() {
      if (sound && soundloaded) {
        sound.pauseSound();
        sound.playSound();
        window.removeEventListener("click", triggerSound, false);
        window.removeEventListener("touchstart", triggerSound, false);
      }
    }
  },
});
