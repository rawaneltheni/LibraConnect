function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  const promises = elements.forEach(el => {
    
    const file = el.getAttribute('data-include');

    if (!file) return; //Promise.resolve();
      return fetch(file)
        .then(res => {
          if (!res.ok) throw new Error(`Failed to load ${file}`);
          return res.text();
        })

        .then(data => {
          el.innerHTML = data;
        })

        .catch(err => {
          console.error(err);
          el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
        });

  });

  //“All included HTML content is done loading. Now run the rest of your scripts.”
  //it ensures that You don’t run code that depends on the HTML before it exists
  Promise.all(promises).then(() => {
    try{ document.dispatchEvent(new CustomEvent('includesLoaded')); }
    catch(e){}
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
