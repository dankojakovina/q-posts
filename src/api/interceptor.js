const { fetch: orgFetch } = window;
import { eventBus } from './eventBus';

export const fetch = async (...args) => {
    eventBus.$emit('LOADING_START');
    let [path, config] = args;
    const basrUrl = 'https://jsonplaceholder.typicode.com/';
    const resource = basrUrl + path;
    const response = await orgFetch(resource, config);
    eventBus.$emit('LOADING_END');

    return response;
}