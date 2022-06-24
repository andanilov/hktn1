export function render() {
  const $but = document.createElement('button');
  $but.innerText = 'Добавить пост';
  document.querySelector('.add-module').append($but);
  return $but;
}
