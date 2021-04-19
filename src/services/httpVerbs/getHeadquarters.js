export const getHeadquarters = async () => {
  var url = "https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582";

  let resp = await fetch(url);
  let { places } = await resp.json();
  console.log(places);

  return places;
};
