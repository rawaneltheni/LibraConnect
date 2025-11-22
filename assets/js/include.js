// It's the function that will find and insert HTML snippets into the page.
function includeHTML() {

  // This looks through the page for any element that has a data-include attribute
  const elements = Array.from(document.querySelectorAll('[data-include]'));

  //Loops through each element and creates a Promise for loading the HTML.
  //Stores all those promises in an array so we can know when everything finishes.
  const promises = elements.map(el => {

    // Read the data-include attribute value from the element — this is the URL/path to the HTML file to fetch.
    const file = el.getAttribute('data-include');

    // If the attribute is missing or empty, skip this element without stopping other loads.
    if (!file) return Promise.resolve();

    // Start fetching the file from the given URL
    return fetch(file)

    // When the network response comes back, run this handler.
    // .then runs after fetch completes and gives the response object.
      .then(res => {

        // If the HTTP status is not in the OK range (200–299). Checks if the file loaded successfully.
        // If not (like 404), it throws an error to handle it later.
        if (!res.ok) throw new Error(`Failed to load ${file}`);

        // Otherwise, read the response body as text (the HTML to inject). This returns another Promise that resolves to the text.
        return res.text();
      })

      // When the response text is available, run this handler with data being the file contents.
      .then(data => {
        // Put the fetched HTML string into the element — this injects the included HTML.
        el.innerHTML = data;
        // Add the CSS class open to the element. (Comment says this preserves older behavior.)
        el.classList.add('open'); // keep previous behavior
      })

      // If any error happened during fetch/response, handle it here.
      .catch(err => {
        // Log the error to the console so devs can see what went wrong.
        console.error(err);
        // Show a small inline error message inside the element so the page indicates the load failed.
        el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
      });

  });

  // Wait until every Promise in promises either fulfills (or the resolved ones did). 
  // When they’re all done, run the callback. 
  // (If any promise rejects, Promise.all would reject — but because each path handles errors and returns a settled promise, this callback runs after all attempts.)
  
  // Waits until all HTML files finish loading or failing. 
  // Promise.all resolves after every element has been processed.
  Promise.all(promises).then(() => {
    // Inside a try to avoid crashes: fire a custom DOM event named 'includesLoaded'. 
    // Other scripts can listen for this to know all includes finished. 
    // The catch swallows any error if dispatching fails.
    try{ document.dispatchEvent(new CustomEvent('includesLoaded')); }catch(e){}
  });
}

// When the DOM is fully parsed (but before images/styles might be loaded), call includeHTML() so the includes are injected as soon as possible.
document.addEventListener('DOMContentLoaded', includeHTML);
