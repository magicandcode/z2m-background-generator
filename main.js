/**
 * Background Generator
 * Generate and set a background gradient by selecting color codes with HTML
 *  color input elements.
 */
const colorInput = {
    left: document.getElementById('left-color'),
    right: document.getElementById('right-color'),
};
const colorCode = {
    left: colorInput.left.value,
    right: colorInput.right.value,
};
const backgroundGradientHeader = document.getElementById('current-background');


const linearGradient = () => `linear-gradient(to right, ${colorCode.left}, `
    + `${colorCode.right})`;

const setBackgroundHeader = () => {
    backgroundGradientHeader.textContent = linearGradient();
};
setBackgroundHeader();

const setGradientBackground = () => {
    document.body.style.background = linearGradient();
};

const setBackgroundSettings = (color, colorPosition) => {
    colorCode[colorPosition] = color.value;
    setGradientBackground();
    setBackgroundHeader();
};

// Use default color input values and set background on initial page load.
setGradientBackground();

// Capture and set input color codes
colorInput.left.addEventListener('input', () => {
    setBackgroundSettings(colorInput.left, 'left');
});
colorInput.right.addEventListener('input', () => {
    setBackgroundSettings(colorInput.right, 'right');
});

// Copy current background value when background header is clicked.
backgroundGradientHeader.addEventListener('click', () => {
    setBackgroundHeader();
    navigator.clipboard.writeText(backgroundGradientHeader.textContent+';');
});
