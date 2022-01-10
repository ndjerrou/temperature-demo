document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const city = e.target.elements.city.value;

  // send a request to the back end
  axios(`/temperature/${city}`);
});
