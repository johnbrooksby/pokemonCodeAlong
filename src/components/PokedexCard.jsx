import React, {useContext} from "react";
import GlobalContext from "../state/GlobalContext";
import axios from "axios";


const PokedexCard = (props) => {
    const {state,dispatch} = useContext(GlobalContext)

    const addToTeam = () => {
        axios.get(props.poke.url)
        .then(res => {
            console.log(res.data)
            dispatch({type: "ADD_TO_TEAM", payload: res.data})
        })
    }

    return (
        <div className="card">
            <img src={props.poke.img} className="poke-img"/>
            <h5>{props.poke.name}</h5>
            <button onClick={addToTeam}>Add to Team</button>
        </div>
    )
}

export default PokedexCard