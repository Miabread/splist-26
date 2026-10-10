import { reactive } from 'vue';
import { range } from './util';

export const messages = reactive<string[]>(range(100).map((it) => it + ''));
