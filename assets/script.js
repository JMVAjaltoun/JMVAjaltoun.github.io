function loadComponent(url, containerId) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading component:', error);
      });
  }