import Post from "./post";

function PostBoxes(){
    let arr=[0,1,2,3,4,5,6,7,8,9];
    return<div>
        {arr.map((i)=>{
           return <Post key={i}/>
        })}
    </div>
}

export default PostBoxes;