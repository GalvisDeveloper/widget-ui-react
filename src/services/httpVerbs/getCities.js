export const getCities = async () => {
  var url = "https://run.mocky.io/v3/f8926877-849a-416f-8226-9fd9d9fc5e07";

  let resp = await fetch(url);
  let { result } = await resp.json();

  console.log(result);

  return result;
};
