const search = document.querySelector('[data-search]');
const category = document.querySelector('[data-category]');
const cards = [...document.querySelectorAll('[data-project]')];
const count = document.querySelector('[data-count]');
const filter = () => {
  const query = search.value.trim().toLocaleLowerCase('cs');
  const selected = category.value;
  let visible = 0;
  for (const card of cards) {
    const matchesQuery = !query || card.dataset.search.includes(query);
    const matchesCategory = !selected || card.dataset.category === selected;
    card.hidden = !(matchesQuery && matchesCategory);
    if (!card.hidden) visible += 1;
  }
  count.textContent = String(visible);
};
search.addEventListener('input', filter);
category.addEventListener('change', filter);
filter();
