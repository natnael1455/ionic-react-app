import React, { useState,useEffect} from 'react';
import {
   IonContent,
   IonSlides
    } from '@ionic/react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import {firebaseConfig} from '../fire_conf'; 
import Question from './Question';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
const Questions: React.FC<{name:any}>= ({name}) => {

    const [data,setData]=useState<any[]>([]);
    const [sectionid,setSectionid]=useState("");
    const section =name;
    useEffect(()=>{
       const starCountRef = database.ref(`sections/${section}/questions`)
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
      console.log(data);
    return(
    <IonContent>
        <IonSlides mode="md" key={data.length} >
            {data.map(datum => <Question key={datum.key} name={datum}/>)}
        </IonSlides>
                 
     </IonContent>
    );
}

export default Questions;


