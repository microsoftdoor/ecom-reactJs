import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Rating = ({rating, onClick, style}) => {
    return ( 
        <div className="rating">
            {
                [...Array(5)].map((_,i)=>{
                    return(
                    <span key={i} onClick={()=> onClick(i)} style={style}>
                        {rating > i ? 
                        (<AiFillStar style={{fontSize:"15px", fontColor: "white"}}/>)
                        : 
                        (<AiOutlineStar style={{fontSize:"15px"}}/>)
                    }
                    </span>)
                })
            }
        </div>
     );
}
 
export default Rating;