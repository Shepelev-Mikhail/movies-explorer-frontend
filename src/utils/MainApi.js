export const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000'}`;

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(res.status)
};

// регистрация нового пользователя
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({name, email, password})
  })
  .then(checkResponse)
};

// вход
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
};

// инфо о пользователе
export const getUserInfo = () => {
  let token = localStorage.getItem('token');

  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
  })
  .then(checkResponse)
};

// редактировать инфо о пользователе
export const editUserInfo = (name, email) => {
  let token = localStorage.getItem('token');

  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify({name, email})
  })
  .then(checkResponse)
};

// Найти сохраненные фильмы
export const getSaveMovies = () => {
  let token = localStorage.getItem('token');

  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
  })
  .then(checkResponse)
};

// Сохранить фильм
export const savingMovie = ({country, director, duration, year, description, image, trailerLink, thumbnail, nameRU, nameEN, movieId}) => {
  let token = localStorage.getItem('token');
  
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    credentials: 'include',
    body: JSON.stringify({country, director, duration, year, description, image, trailerLink, thumbnail, nameRU, nameEN, movieId})
  })
  .then(checkResponse)
};

// Удалить фильм
export const deleteMovie = (_id) => {
  let token = localStorage.getItem('token');

  return fetch(`${BASE_URL}/movies/${_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  .then(checkResponse)
};