function renderProgressBar(selector, data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const progress = data[i];

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

    const DOM = document.querySelector(selector);
    DOM.innerHTML += HTML;
    console.log(HTML);
}

export { renderProgressBar }