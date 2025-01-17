import React from 'react'

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error
  }
}
