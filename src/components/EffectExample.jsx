import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const EffectExample = () => {

    const [performance, setPerformance] = useState("");
    const [phase, setPhase] = useState("");

    useEffect(() => {

        setPhase("Mounted")

    },[]);

    useEffect(() => {
        
        setPhase("Updating")
        
        return(() => {
            setPhase('Unmounted')
        })
    },[performance]);

    return(
        <div>
            <h1>Example of UseEffect</h1>

            <div>
                <label htmlFor="performance">Enter Performance : </label>
                <input type="text" onChange={(e) => setPerformance(e.target.value)} />
            </div>

            <h2>Perfomance Values </h2>
            <h3>In {phase} Phase : <p>{performance}</p></h3>

        </div>
    );
}

export default EffectExample;
