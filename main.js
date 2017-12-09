const items = [...document.querySelectorAll('.item')];
let isFirstChecked = false;
let isLastChecked = false;
let isShifting = false;
let firstIndex, lastIndex;

items.forEach((item, i) => item.addEventListener('change', (e) => {
    let checkboxState = e.target.checked;
    isFirstChecked = checkboxState;
    console.log(isFirstChecked);
    firstIndex = isFirstChecked && !isShifting ? i : firstIndex;
    isLastChecked = checkboxState && isShifting && isFirstChecked;
    if (isLastChecked) {
        lastIndex = i;
        if (firstIndex < lastIndex) {
            items.forEach((item, i) => {
                if (i > firstIndex && i < lastIndex) {
                    item.querySelector('input[type="checkbox"]').checked = true;
                }
            });
        } else {
             items.forEach((item, i) => {
                if (i < firstIndex && i > lastIndex) {
                    item.querySelector('input[type="checkbox"]').checked = true;
                }
            });
        }
    }
}));

window.addEventListener('keydown', (e) => {
    isShifting = e.keyCode === 16;
});

window.addEventListener('keyup', (e) => {
    isShifting = false;
});
