const colorInput = {
    left: document.getElementById('left-color'),
    right: document.getElementById('right-color'),
};
const colorCode = {
    left: colorInput.left.value,
    right: colorInput.right.value,
};
const bgHeader = document.getElementById('current-background');
const linearGradient = () => `linear-gradient(to right, `
    + `${colorCode.left}, `
    + `${colorCode.right})`;

const setBackgroundHeader = () => bgHeader.textContent = linearGradient();
setBackgroundHeader();

const setGradientBackground = () => {
    document.body.style.background = linearGradient();
};
setGradientBackground();

const setBackgroundSettings = (color, colorPosition) => {
    colorCode[colorPosition] = color.value;
    setGradientBackground();
    setBackgroundHeader();
};

// Capture input color codes
colorInput.left.addEventListener('input', () => {
    setBackgroundSettings(colorInput.left, 'left');
});
colorInput.right.addEventListener('input', () => {
    setBackgroundSettings(colorInput.right, 'right');
});

// Copy current linear-background value
bgHeader.addEventListener('click', () => {
    setBackgroundHeader();
    navigator.clipboard.writeText(bgHeader.textContent+';');
});
