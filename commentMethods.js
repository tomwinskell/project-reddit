import { buildConst } from "./buildMethods.js";

export function addComment(eventTarget) {
  const { formEl, obj, el } = buildConst(eventTarget, [{type: 'p'}]);
  el.querySelector('p').innerText = `${obj.comment} - Posted by: ${obj.name}`;
  formEl.insertBefore(el, formEl.firstChild);
}

export function showComments(eventTarget) {
  const cl = eventTarget.nextSibling.classList;
  if (cl.contains('d-none')) {
    cl.remove('d-none');
    eventTarget.innerText = 'Hide Comments'
  } else {
    cl.add('d-none');
    eventTarget.innerText = 'Show Comments'
  }
}