export default function createSidebarRepo(accountName, repoName, imageUrl, maxItem) {
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
