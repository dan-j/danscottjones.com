import { createClient } from 'contentful';

const isPreview = process.env.CONTENTFUL_IS_PREVIEW;

const accessToken = isPreview ?
    process.env.CONTENTFUL_PREVIEW_TOKEN :
    process.env.CONTENTFUL_ACCESS_TOKEN;

const host = isPreview ?
    process.env.CONTENTFUL_PREVIEW_HOST :
    process.env.CONTENTFUL_CDN_HOST;

const credentials = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken,
    host,
};

const contentfulClient = createClient(credentials);

export default contentfulClient;
