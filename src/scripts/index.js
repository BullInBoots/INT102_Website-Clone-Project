console.log("index.js loaded");

const defaultImageSrc = './assets/images/profile-image.jpg';
console.log(defaultImageSrc);
const userName = "AccountName";
const repoName = "RepositoryName";
const repoList = document.querySelector('#repo-list');

function createSidebarRepo(accountName, repoName, imageUrl, maxItem) {
    let fragment = document.createDocumentFragment();
    
    for (let i=1; i<=maxItem; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        let img = document.createElement('img');
        li.classList.add('repo-list-item', 'flex', 'item-center');
        a.href = '#';
        a.textContent = accountName + '/' + repoName + i;
        img.src = imageUrl;
        li.append(img, a);
        fragment.appendChild(li);
    }
    return fragment;
}

repoList.append(createSidebarRepo(userName, repoName, defaultImageSrc, 7));