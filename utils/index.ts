export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "cf88908802msh55f48b761bc01ccp1cb226jsn1b1302f2d946",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
