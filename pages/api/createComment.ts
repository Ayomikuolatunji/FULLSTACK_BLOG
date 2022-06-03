import { NextApiRequest, NextApiResponse } from "next";
import sanityclient from "@sanity/client";


export const config ={
  dataset: process.env.SANITY_DATASET,
  projectId:"c3lbf9qu",
  apiVersion:"2021-03-25",
  useCdn: process.env.NODE_ENV==="production",
  token: process.env.SANITY_TOKEN
}

export default async function  creatComment(req:NextApiRequest,res:NextApiResponse){
  const {_id,username,email,comment}=req.body;
    try {
       await sanityclient(config).create({
         _type:"comment",
         post:{
           _type:"reference",
           _ref:_id
         },
         username,
          email,
          comment
       })
       res.status(200).json({"message":"comment created"})
    } catch (error) {
      res.status(500).json({error})
    } 
}

