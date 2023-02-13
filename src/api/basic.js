import axios from 'axios';

// _____ Документаці як в 8 дз по React
// Первий запит може йти довго так як server безкоштовний і він "засинає"

const URL = '';

export const server = axios.create({
  baseURL: URL,
});
