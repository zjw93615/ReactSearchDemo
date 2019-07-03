import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b79ea95f981eb505648be5102dcfa6b04333ff67925e1eb03d5afe988b79f43b',
  }
});