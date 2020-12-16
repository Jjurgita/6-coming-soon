import { isValidInput } from './isValidInput.js';
import { isValidProgressBar } from './isValidProgressBar.js';

function renderProgressBar(selector, data) {
    //input validation
    if (!isValidInput(selector, data)) {
        return false;
    }

    //selector - find place to add new HTML
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    //update content
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const progress = data[i];
        if (!isValidProgressBar(progress)) {
            continue;
        }

        HTML += `<div class="prog-bar">
                    <div class="top">
                        <div class="label">${progress.title}</div>
                        <div class="value">${progress.value}%</div>
                    </div>
                    <div class="bottom">
                        <div class="progress" style="width: ${progress.value}%;">
                            <div class="bar"></div>
                        </div>
                    </div>
                </div>`;
    }

    //post logic validation
    if (HTML === '') {
        return false;
    }

    DOM.innerHTML += HTML;
    return true;
}

export { renderProgressBar }