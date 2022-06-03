interface Post {
    _id:number,
    title:string,
    description:string,
    slug:string,
    mainImage:{
        asset:{
            url:string
        }
    },
    slug:string,
    author:{
        name:string,
        image:string
    }
    body:[object]
}

export default Post;