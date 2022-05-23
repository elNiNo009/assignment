
import { useParams } from "react-router-dom"

const MemberDash=()=>{
    const params=useParams();
    return (
        <div>
        <p>{params.id}</p>
        </div>
    )

}


export default MemberDash