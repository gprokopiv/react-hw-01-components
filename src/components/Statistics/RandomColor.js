const random = () => Math.floor(255 * Math.random());
function RandomColor() {
  return `rgb(${random()}, ${random()}, ${random()})`;
}
export default RandomColor;
