const sizeInput = document.getElementById('size');
const yPositionInput = document.getElementById('yPosition');
const xPositionInput = document.getElementById('xPosition');

function Positate() {
	const data = {size: sizeInput.value, y: yPositionInput.value, x: xPositionInput.value}
	nodecg.sendMessage('positionLogo', data);
}
