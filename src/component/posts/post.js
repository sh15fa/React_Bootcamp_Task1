import LoremIpsum from "react-lorem-ipsum";
import './post.css'


function Post(){
    return<div className="box">
        <h3>This is The Post Title</h3>
        <LoremIpsum p={1} avgSentencesPerParagraph={0.5}/>
    </div>
}

export default Post;