import React, {useContext, useMemo} from "react";
import GlobalContext from "../state/GlobalContext";


const TeamScreen = () => {
    const {state, dispatch} = useContext(GlobalContext)
    const displayTeam = useMemo(() => state.team.map((p, index) => {
        return <h5>{p.name}</h5>
    }), [state.team])

    return (
        <div>
            <h1>My Team</h1>
            {displayTeam}
        </div>
    )
}

export default TeamScreen;