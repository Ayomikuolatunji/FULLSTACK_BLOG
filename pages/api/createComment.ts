import { NextApiRequest, NextApiResponse } from "next";
import SanityClientConstructor from "@sanity/client";


export const config ={
  dataset: process.env.SANITY_DATASET,
  projectId:"c3lbf9qu",
  apiVersion:"2021-03-25",
  useCdn: process.env.NODE_ENV==="production",
  token: process.env.SANITY_TOKEN
}

export default function  creatComment(req:NextApiRequest,res:NextApiResponse){
  res.status(200).json({hello:'world'})
}

