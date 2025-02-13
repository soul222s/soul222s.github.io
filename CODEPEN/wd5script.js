gsap.registerPlugin(Observer);

const lines = document.querySelectorAll("polyline");
const width = 50;
const freq = 10;
const damp = 30;
let drift = 0;
let points = [];

function setPoints(amp = 0) {
  let x;
  let y;
  let step = 0;

  points = [];

  for (x = 0; x <= width; x++) {
    x < width / 2 ? step++ : step--;
    y = (step / damp) * amp * Math.sin(((x + drift) / damp) * freq);

    points.push(x, y);
  }

  return points.join(" ");
}

function updatePolylinePoints() {
  lines.forEach((line) => {
    line.setAttribute("points", points);
  });
}

Observer.create({
  type: "wheel,touch,scroll,pointer",
  onChangeY({ velocityY }) {
    drift += velocityY * 0.0002;
    setPoints(velocityY * 0.0005);
    updatePolylinePoints();
  }
});