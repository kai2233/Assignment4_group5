function calcSphere() {
  let Val = document.getElementById("InputBox").value;
  let sphVolume = (4 / 3) * 3.14 * (Val * Val * Val);
  console.log(sphVolume);
  document.getElementById("sphereResult").innerHTML = sphVolume;
}
