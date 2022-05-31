import { Target } from '../targets';
import { rest } from './rest/client';

export const nice: Target = {
  info: {
    key: 'nice',
    title: 'nicec',
    extname: null,
    default: 'nice',
  },
  clientsById: {
    rest,
  },
};
