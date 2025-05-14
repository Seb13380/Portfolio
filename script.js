// script.js

document.addEventListener("DOMContentLoaded", function() {
  const projectsContainer = document.getElementById('projects');

  // Fonction pour créer une carte de projet
  function createProjectCard(name, description, url) {
    const card = document.createElement('div');
    card.className = 'bg-card p-4 hover:shadow-xl transition';

    const title = document.createElement('h3');
    title.className = 'text-xl font-semibold mb-2';
    title.textContent = name;
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'text-gray-700 mb-4';
    desc.textContent = description || 'Pas de description.';
    card.appendChild(desc);

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.textContent = 'Voir sur GitHub';
    link.className = 'text-blue-600 hover:underline';
    card.appendChild(link);

    return card;
  }

  // Récupérer les repos GitHub de l'utilisateur
  fetch('https://api.github.com/users/Seb13380/repos')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur API GitHub : ${response.status}`);
      }
      return response.json();
    })
    .then(repos => {
      // Filtrer ou trier les repos si nécessaire (ex: ne pas inclure les forks)
      repos.forEach(repo => {
        // Créer et ajouter la carte pour chaque projet
        const card = createProjectCard(repo.name, repo.description, repo.html_url);
        projectsContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Impossible de charger les projets GitHub :', error);
      // Optionnel : afficher un message d'erreur dans la page
    });
});
