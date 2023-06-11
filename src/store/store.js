import { writable } from 'svelte/store';

export const isSidenavOpen = writable(false);

const user_login = writable(false);
export default user_login;

