const defaultImageSrc = '../public/images/profile-image.jpg';
const repoList = document.querySelector('#repo-list');

function createRepoListItem(accountName, repoName, imageUrl, maxItem) {
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

repoList.append(createRepoListItem("BullinBoots", "Repo", defaultImageSrc, 7));