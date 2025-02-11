// src\sanity\lib\fetch.ts

import { createClient } from "next-sanity"



const client =createClient({
    projectId:"2z41bjsx",
    dataset :"production",
    apiVersion:"2023-10-10",
    useCdn: false,
})

export async function sanityFetch({query ,params={}}:{query:string ,params?:any}){
    return await client.fetch(query ,params)
}