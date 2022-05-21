import React, { useState,useEffect} from 'react';
import {
   IonContent
    } from '@ionic/react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import {firebaseConfig} from '../fire_conf'; 
import SectionGrid from './SectionGrid'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

const Sections: React.FC= () => {

    const [data,setData]=useState<any[]>([]);
    useEffect(()=>{
       const starCountRef = database.ref('sections')
       starCountRef.once('value')
       .then((snapshot) => {
           let tasksObject = snapshot.val(); //convert snapshot to value
           if (tasksObject !== null){
            let taskKeys = Object.keys(tasksObject);
            let taskArray= taskKeys.map((key) => { //map array of keys into array of tasks
                let task = tasksObject[key]; //access element at that key
                task.key = key; //save the key for later referencing!
                return task; });
            setData(taskArray)
            }
       });
      },[]);
    return(
    <IonContent>
             
             <table>
                 <thead>
                   <tr>
                       <td>English Name</td>
                       <td>Finnish Name</td>
                       <td></td>
                    
                   </tr>
                 </thead>
                 <tbody>
                 {data.map(datum => <SectionGrid key={datum.key} name={datum}/>)}
                 </tbody>
             </table>
     </IonContent>
    );
}

export default Sections;