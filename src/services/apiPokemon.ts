import api from './apiConfig';

export default async function getPokemonList() {
  try {
    const response = await api.get('?limit=150');
    return response.data;
  } catch (error) {
    return false;
  }
}
