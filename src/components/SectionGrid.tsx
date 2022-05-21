import React from 'react';
import {
   IonButton
    } from '@ionic/react';

const SectionGrid: React.FC<{name:any}>= ({name}) => {
    console.log(name)
    return (
    <tr>
        <td>{name.englishName}</td>
        <td>{name.finnishName}</td>
        <td><IonButton>Update</IonButton></td>
    </tr>
    )
} 

export default SectionGrid;
