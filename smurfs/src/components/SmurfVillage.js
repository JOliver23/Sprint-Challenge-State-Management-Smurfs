import React, {useContext} from 'react';
import { SmurfContext} from '../contexts/SmurfContext';

import SmurfCard from './SmurfCard';

const SmurfVillage = () => {
    const {smurfs, addSmurf} = useContext(SmurfContext);

    return (
        <div className="village">
            {smurfs.map(smurf => (
                <SmurfCard 
                    key={smurf.id}
                    smurf={smurf}
                    addSmurf={addSmurf}
                />
            ))}
        </div>
    )

}

export default SmurfVillage;