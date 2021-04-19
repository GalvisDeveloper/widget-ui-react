export const getExtendPronostic = async () => {
  var url = "https://run.mocky.io/v3/73c29128-d158-40db-aeae-ea78a0d762b7";

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data;
};
