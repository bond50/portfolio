import getConfig from "next/config";

const {publicRuntimeConfig} = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.API_PRODUCTION
    : publicRuntimeConfig.API_DEVELOPMENT;

export const APP_NAME = publicRuntimeConfig.APP_NAME;


export const CLOUDINARY_NAME = publicRuntimeConfig.CLOUDINARY_NAME;


export const SITE_URL = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.SITE_URL
    : publicRuntimeConfig.SITE_URL_DEV;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.DOMAIN_PRODUCTION
    : publicRuntimeConfig.DOMAIN_DEVELOPMENT;




