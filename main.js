const main = document.querySelector('.main');
const posts = document.querySelector('.posts');
const postForm = document.querySelector('.post-form');

main.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('add-post')) {
    appendToMain(posts, createPostElement(getPostInput()));
    clearInput();
  }
})

function getPostInput() {
  return Array.from(postForm.querySelectorAll('input')).reduce((struct, current) => {
    struct[current.name] = current.value;
    return struct;
  }, {})
}

function clearInput() {
  postForm.querySelectorAll('input').forEach(input => {
    input.value = '';
  })
}

function createPostElement(obj) {
  const el = document.createElement('div');
  el.classList.add('py-3')
  el.appendChild(document.createTextNode(`${obj.text} - Posted by: ${obj.name}`));
  return el;
}

function appendToMain(domElement, htmlElement) {
  return domElement.appendChild(htmlElement);
}


