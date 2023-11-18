let table = document.querySelector("#graph-table");
let tableLabel = document.querySelector("#graph-label");
let graphContent = document.querySelector("#graph-content")


function createContributionBlock() {
    let td = document.createElement('td');
    const blockColorpalette = ["#171a22", "#39d353", "#26a740", "#006c33", "#0f4529"];
    const selectedColor = blockColorpalette[Math.floor(Math.random() * 5)];
    let block = document.createElement('div');
    block.style.cssText = "width:10px; height:10px; border-radius:2px; margin-right: 1px;" + `background-color:${selectedColor}`;
    td.appendChild(block);
    return td;
}

function createContributionRow(blockCount, hasDay) {
    let tr = document.createElement('tr');
    for (let i=1; i<=blockCount;i++) {
        let block = createContributionBlock();
        tr.appendChild(block);
    }
    console.log(tr);
    return tr;
}

function createContributionBody(rowCount, blockCount) {
    let fragment = document.createDocumentFragment();
    for (let i=1; i<=rowCount; i++) {
        let row = createContributionRow(blockCount);
        let dayContainer = document.createElement('td');
        dayContainer.style.cssText = "font-size:12px; color:#C8D1D8; font-weight:400; padding-right:6px";
        if (i % 2 == 0) {
            dayContainer.textContent = "Day";
            row.insertBefore(dayContainer, row.firstElementChild);
        } else {
            dayContainer.textContent = " ";
            row.insertBefore(dayContainer, row.firstElementChild);
        }
        fragment.appendChild(row);
    }
    return fragment;
}

graphContent.appendChild(createContributionBody(7, 53))