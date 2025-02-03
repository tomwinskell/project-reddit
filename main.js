import { commentEl } from './commentEl.js';
import { postEl } from './postEl.js';

const main = document.querySelector('.main');
const posts = document.querySelector('.posts');
const postForm = document.querySelector('.post-form');

main.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('add-post')) {
    posts.appendChild(createPostEl(getFormInput(postForm)));
    clearInput();
  }
  if (e.target.classList.contains('delete-btn')) {
    deletePost(e.target);
  }
  if (e.target.classList.contains('show-comments')) {
    showComments(e.target);
  }
  if (e.target.classList.contains('add-comment')) {
    addComment(e.target);
  }
});

function addComment(eventTarget) {
  const formEl = eventTarget.closest('form');
  const parent = eventTarget.closest('.card-body')
  const obj = getFormInput(formEl);
  const comment = buildFragment([{type: 'p'}]);
  comment.querySelector('p').innerText = `${obj.comment} - Posted by: ${obj.name}`;
  parent.insertBefore(comment, formEl);
}

function getFormInput(formElement) {
  return Array.from(formElement.querySelectorAll('.form-control')).reduce(
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
  el.querySelector('.card-body').appendChild(buildFragment(commentEl));
  return el;
}

function showComments(eventTarget) {
  const cl = eventTarget.nextSibling.classList;
  if (cl.contains('d-none')) {
    cl.remove('d-none');
  } else {
    cl.add('d-none');
  }
}

function deletePost(eventTarget) {
  eventTarget.closest('.card').remove();
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
