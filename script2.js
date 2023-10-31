import fetch from "node-fetch";

export const getPeoplePromise = (fetch) => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((data) => data.length)
}

export const getPeople = async (fetch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return data.length
}

// getPeople(fetch).then((data) => console.log({count: data.length}))