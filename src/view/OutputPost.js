export function render(posts = []) {
  const $outputPostArea = document.querySelector('div.output-module');
  $outputPostArea.innerHTML = posts.reduce((acc, post, i) => acc += `<div>${i}: ${post}</div>`, '');
  return $outputPostArea;
}