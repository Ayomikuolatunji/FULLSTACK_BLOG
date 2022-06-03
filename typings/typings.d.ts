

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
    comments:Comment[],
    publishedAt:string,
    body:[object]
}

export interface Comment {
    comment:string
    username:string
    _id:number
}




export default Post;