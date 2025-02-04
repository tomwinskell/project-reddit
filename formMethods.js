export function getFormInput(formElement) {
  const input = Array.from(formElement.querySelectorAll('.form-control')).reduce(
    (struct, current) => {
      struct[current.name] = current.value;
      return struct;
    },
    {}
  );
  clearInput(formElement);
  return input;

  function clearInput(formElement) {
    formElement.querySelectorAll('.form-control').forEach((input) => {
      input.value = '';
    });
  }
}