import {MenuItem} from 'primeng/api';
import {environment} from '../../environments/environment';

export const APP_PROTOCOL = window.location.protocol + '//';
export const APP_HOST = window.location.hostname + ':';
export const APP_PORT = window.location.port;
export const APP_CONTEXT = '/snello';
export const APP_API = 'api/v2/';
export const APP_NAME = APP_PROTOCOL + APP_HOST + APP_PORT + APP_CONTEXT + APP_API;


export const API_DATE_FORMAT = 'yyyy-MM-DD[T]HH:mm:ss';
export const CHIPS_DATE_FORMAT = 'DD/MM/yyyy HH:mm';

export const APP_VERSION = '1.0.1';
export const APP_API_ONLY = 'api/';

export const PAGES: MenuItem[] = [
  {label: 'List', routerLink: '/list', icon: 'fa fa-clipboard'},
];

export const ERROR_MSG = {
  200: 'code already exists.',
};
