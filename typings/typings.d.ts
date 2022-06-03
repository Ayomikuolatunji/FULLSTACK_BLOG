interface Post {
    _id:number,
    title:string,
    description:string,
    slug:{
        current:string
    },
    mainImage:{
        asset:{
            url:string
        }
    },
    slug:string,
    author:{
        name:string,
        image:{
            url:string
        }
    },
    publishedAt:string,
    body:[object]
}


export default Post;