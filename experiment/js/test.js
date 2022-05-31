// var obj = {
//    name: "pikachu",
//    getName: function() {
//       return this.name;
//    },
//    setName: function(name) {
//       this.name = name;
//    }
// };

// // obj.setName('doremon');
// // alert(obj.name);
// // console.log(obj.getName);
// // console.log(obj.getName());

// var $para = document.getElementById("testId");
// // console.log("paragraph object", $para);
// $para.innerHTML = "i am paragraph";
// $para.style.color = "white";
// $para.style.backgroundColor = "red";
// // if active
// var isActive = true;
// if (isActive) {
//    $para.classList.add("active");
// }

// // document.getElementById("testId").innerHTML = "i am paragraph";

boxProp = [];

function generateBox(num) {
   box.top = new random();
   box.left = new random();

   boxProp.push({ top: newTop, left: newLeft });
}

function plotBox(boxProp) {}

generateBox(10);
plotBox();














var boxProp = [
   { left: 20, top: 20 },
   { left: 200, top: 200 },
   { left: 100, top: 200 },
   { left: 50, top: 250 },
   { left: 400, top: 100 },
   { left: 200, top: 50 },
   { left: 300, top: 150 },
   { left: 450, top: 60 }
];

for (var i = 0; i < boxProp.length; i++) {
   var $box = document.createElement("div");

   $box.style.width = 20 + "px";
   $box.style.height = 20 + "px";
   $box.style.position = "absolute";
   $box.style.backgroundColor = "red";
   $box.style.top = boxProp[i].top + "px";
   $box.style.left = boxProp[i].left + "px";

   var $parent = document.getElementById("parentDiv");
   $parent.appendChild($box);
}
