// Enhancement only: all calculator descriptions remain visible without JavaScript.
const filterButtons = document.querySelectorAll('[data-filter]');
const tools = document.querySelectorAll('[data-category]');
for (const button of filterButtons) {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    for (const item of filterButtons) item.setAttribute('aria-pressed', String(item === button));
    let count = 0;
    for (const tool of tools) {
      tool.hidden = selected !== 'all' && tool.dataset.category !== selected;
      if (!tool.hidden) count += 1;
    }
    const status = document.querySelector('#filter-status');
    if (status) status.textContent = `${count} calculators shown`;
  });
}
