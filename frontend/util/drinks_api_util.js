export const fetchDrinks = ()  => {
  return $.ajax({
    method: 'GET',
    url: 'api/drinks'
  });
};

export const fetchDrink = id => {
  return $.ajax({
    method: 'GET',
    url: `api/drinks/${id}`
  });
};

export const updateDrink = drink => {
  return $.ajax({
    method: 'PATCH',
    url: `api/drinks/${drink.id}`,
    data: { drink }
  });
};

export const createDrink = formData => {
  return $.ajax({
    method: 'POST',
    url: 'api/drinks/',
    data: { formData },
    contentType: false,
    processData: false
  });
};

export const deleteDrink = id => {
  return $.ajax({
    mathod: 'DELETE',
    url: `api/drinks/${id}`
  });
};

export const fetchRegions = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/regions'
  });
};
