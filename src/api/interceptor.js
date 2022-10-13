import { eventBus } from './eventBus';

const { fetch: orgFetch } = window;

export const fetch = async (...args) => {
  eventBus.$emit('LOADING_START');
  const [path, config] = args;
  const basrUrl = 'https://jsonplaceholder.typicode.com/';
  const resource = basrUrl + path;
  const response = await orgFetch(resource, config);
  eventBus.$emit('LOADING_END');

  return response;
};
