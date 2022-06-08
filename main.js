let painting = false;
let images = document.querySelectorAll('img');
// console.log(images);
images.forEach((image, i) => {
  // console.log(image);
  let canvas = document.createElement('canvas');
  // document.body.appendChild(canvas);
  canvas.width = image.width;
  canvas.height = image.height;
  let ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, image.width, image.height);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.strokeRect(0, 0, image.width, image.height);
  let imageUrl = canvas.toDataURL();
  image.src = imageUrl;


  image.addEventListener('mousedown', (e) => {
    // console.log("down");
    painting = true;
    ctx.beginPath();
    draw(canvas, ctx, image, e);
  })
  image.addEventListener('mouseup', (e) => {
    painting = false;
    ctx.beginPath();
  })
  image.addEventListener('mousemove', (e) => {
    draw(canvas, ctx, image, e);
  })
})

function draw(canvas, ctx, image, e) {
  e.preventDefault();

  //Eraser updated
  // if (erase == true) {
  //   ctx.globalCompositeOperation = 'destination-out';
  // } else {
  ctx.globalCompositeOperation = 'source-over';
  // }

  // let x = e.touches[0].clientX || e.clientX;
  // let y = e.touches[0].clientY || e.clientY;

  let x = e.offsetX;
  let y = e.offsetY;

  // var x = e.clientX;
  // var y = e.clientY;


  // console.log(x, y);
  if (!painting) return;

  ctx.lineWidth = 1;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = "red";
  ctx.globalAlpha = 1;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y)
  let imageUrl = canvas.toDataURL();
  image.src = imageUrl;
}

