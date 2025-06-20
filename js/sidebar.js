// Expect FALLACIES to be loaded before this script

const sidebar = document.querySelector('.sidebar nav ul');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Switch to .info View';
toggleBtn.style.marginBottom = '1rem';
document.querySelector('.sidebar nav').prepend(toggleBtn);

let currentView = 'logicrocket';

function renderLogicRocket() {
  sidebar.innerHTML = '';
  FALLACIES.sort((a, b) => a.number - b.number).forEach(f => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="/fallacies/${slugify(f.name)}.html">#${f.number} ${f.name}</a>`;
    sidebar.appendChild(li);
  });
}

function renderInfoView() {
  sidebar.innerHTML = '';
  const groups = {};
  FALLACIES.forEach(f => {
    if (!groups[f.group]) groups[f.group] = [];
    groups[f.group].push(f);
  });
  Object.keys(groups).forEach(group => {
    const header = document.createElement('h3');
    header.textContent = group;
    sidebar.appendChild(header);
    groups[group].forEach(f => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="/fallacies/${slugify(f.name)}.html">${f.name}</a>`;
      sidebar.appendChild(li);
    });
  });
}

toggleBtn.addEventListener('click', () => {
  if (currentView === 'logicrocket') {
    renderInfoView();
    toggleBtn.textContent = 'Switch to LogicRocket View';
    currentView = '.info';
  } else {
    renderLogicRocket();
    toggleBtn.textContent = 'Switch to .info View';
    currentView = 'logicrocket';
  }
});

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

renderLogicRocket();
