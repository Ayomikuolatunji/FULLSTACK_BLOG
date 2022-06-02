import {
    createClient,
    createImageUrlBuilder,
    createCurrentUserHook

}

from "next-sanity"

export const config ={
    dataset: "production",
    projectId: "5ejqjqjq",
    apiVersion:"v1",
    useCdn: true,
}