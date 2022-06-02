import {
    createClient,
    createImageUrlBuilder,
    createCurrentUserHook

}

from "next-sanity"

export const config ={
    dataset: process.env.SANITY_DATASET,
    projectId: process.env.SANITY_PROJECTID,
    apiVersion:"v1",
    useCdn: process.env.NODE_ENV==="production",
}