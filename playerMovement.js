AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Add the condition to play sound
        if (
          e.key==="ArowUp"||
          e.key==="ArowDown"||
          e.key==="ArowRight"||
          e.key==="ArowLeft"
        ){
          var entity=document.querySelector("#sound2");
          entity.component.sound.playSound()
        }


      });
    },
  });


  