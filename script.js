function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	const radiusElement = document.getElementById("radius").value;
	let r = parseFloat(radiusElement);
	const Volume = document.getElementById("volume");
	if(isNaN(r) || r<0){
		Volume.value = "NaN";
		return;
	}
  
    const vol = (4/3) * Math.PI * r * r * r ;

	Volume.value = vol.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
