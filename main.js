import { commentEl } from './commentEl.js';
import { postEl } from './postEl.js';

const main = document.querySelector('.main');
const posts = document.querySelector('.posts');
const postForm = document.querySelector('.post-form');

main.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('add-post')) {
    posts.appendChild(createPostEl(getPostInput()));
    clearInput();
  }
  if (e.target.classList.contains('delete-btn')) {
    
  }
  if (e.target.classList.contains('show-comments')) {
    showComments(e.target);
  }
});

function getPostInput() {
  return Array.from(postForm.querySelectorAll('.form-control')).reduce(
    (struct, current) => {
      struct[current.name] = current.value;
      return struct;
    },
    {}
  );
}

function clearInput() {
  postForm.querySelectorAll('.form-control').forEach((input) => {
    input.value = '';
  });
}

function createPostEl(obj) {
  const el = buildFragment(postEl);
  el.querySelector('.card-title').innerText = `${obj.title}`;
  el.querySelector('.card-subtitle').innerText = `Posted by: ${obj.name}`;
  el.querySelector('.card-text').innerText = `${obj.text}`;
  el.lastChild.appendChild(buildFragment(commentEl));
  return el;
}

function showComments(eventTarget) {
  if (eventTarget.classList.contains('d-none'))
  console.log(event)
}

function buildFragment(arrayObj) {
  const fr = new DocumentFragment();

  arrayObj.forEach((obj) => {
    fr.appendChild(buildElement(obj));
  });

  function buildElement(obj) {
    const el = document.createElement(obj.type);

    if (obj.attributes) {
      for (const key in obj.attributes) {
        const a = document.createAttribute(key);
        a.value = obj.attributes[key];
        el.setAttributeNode(a);
      }
    }

    if (obj.children) {
      if (typeof obj.children[0] === 'string') {
        const newContent = document.createTextNode(obj.children);
        el.appendChild(newContent);
      } else {
        obj.children.forEach((element) => {
          const child = buildElement(element);
          el.appendChild(child);
        });
      }
    }
    return el;
  }

  return fr;
}
