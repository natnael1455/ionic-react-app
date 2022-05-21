import React, { useState} from 'react';
import { useForm,Controller } from "react-hook-form";
import {
  IonButton,
  IonContent,
  IonTextarea,
  IonInput, 
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
  } from '@ionic/react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import {firebaseConfig} from '../fire_conf'; 
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

type Inputs = {
  finnName: string,
  EngName: string,
  finnDis:string,
  engDis:string
};

let initialValues = {
  finnName:'',
  EngName: '',
  finnDis:'',
  engDis:''
};

const Section_register: React.FC= () => {
  const {control, handleSubmit, errors} = useForm<Inputs>({
    defaultValues: initialValues
  });
  const [finnishName,setFinnishName]=useState("");
  const [englishName,setEglishName]=useState("");
  const [finnishDis,setFinnishDis]=useState("");
  const [englishDis,setEglishDis]=useState("");
  const [location,setLocation]=useState(false);
  const [xmin,setXmin]=useState(0);
  const [ymin,setYmin]=useState(0);


  const starCountRef = database.ref('sections');

  const onSubmit =()=>{
    const newsection = {
      finnishName:finnishName,
      englishName:englishName,
      finnishDis:finnishDis,
      englishDis:englishDis,
      location:location,
      xmin:xmin,
      ymin:ymin,
    }
    console.log('i am here');
    starCountRef.push(newsection)
      .then(pushed_section => {
      
      });
  } 

return(
    <IonContent fullscreen >
        <form id="main" onSubmit={handleSubmit(onSubmit)} >
        <IonList>
          <IonItem >
            <IonLabel color="primary">Finnish Section name:</IonLabel> 
            <Controller
                render={({ onChange, onBlur, value }) => (<IonInput class="box" color="secondary" 
                placeholder="Enter Finnish name" onIonChange={e =>{
                  onChange( e?.detail.value);
                  setFinnishName(e.detail.value!);
                }}
                onIonBlur={onBlur}/>)}
                control={control}
                name="finnName"
                value={finnishName}
                rules={{
                  required: true
                }}
              />
            {errors.finnName &&  <span color="red">This field is required</span>}


          </IonItem>
          <IonItem>
            <IonLabel  color="primary">English Section name:</IonLabel> 
            <Controller
                render={({ onChange, onBlur, value }) => (<IonInput class="box" color="secondary" 
                placeholder="Enter English name" onIonChange={e =>{
                  onChange( e?.detail.value);
                  setEglishName(e.detail.value!);
                }}
                onIonBlur={onBlur}/>)}
                control={control}
                name="EngName"
                value={englishName}
                rules={{
                  required: true
                }}
              />
            {errors.EngName && <span color="red">This field is required</span>}
          </IonItem>
          <IonItem>
          <IonLabel color="primary">Finnish Description </IonLabel>
          <Controller
                render={({ onChange, onBlur, value }) => (<IonTextarea name="finnDis" class="box" 
                color="secondary"  placeholder="Enter more information here..."
                rows={6} 
                onIonChange={e =>{
                  onChange( e?.detail.value);
                  setFinnishDis(e.detail.value!);
                }}
                onIonBlur={onBlur}/>)}
                control={control}
                name="finnDis"
                value={finnishDis}
                rules={{
                  required: true
                }}
              />
            {errors.finnDis &&  <span color="red">This field is required</span>}
          </IonItem>
          <IonItem>
            <IonLabel color="primary" >English Description</IonLabel>
            <Controller
                render={({ onChange, onBlur, value }) => (<IonTextarea  class="box" 
                color="secondary"  placeholder="Enter more information here..."
                rows={6} 
                onIonChange={e =>{
                  onChange( e?.detail.value);
                  setEglishDis(e.detail.value!);
                }}
                onIonBlur={onBlur}/>)}
                control={control}
                name="engDis"
                value={finnishDis}
                rules={{
                  required: true
                }}
              />
            {errors.engDis &&  <span color="danger">This field is required</span>}
          </IonItem>
          <IonItem>
            <IonLabel color="primary">Intside</IonLabel> 
            <IonToggle checked={location} 
              onIonChange={e => setLocation(e.detail.checked)} />
            <IonLabel color="primary">      Outside</IonLabel>
          </IonItem>
          <IonItem>
            <IonList>
              <IonItem>
                <IonLabel color="primary">latitude:</IonLabel>
                <IonInput class="box" type="number" id="xmin" color="secondary"disabled = {!location} 
                  value={xmin}
                  onIonChange={e => setXmin(parseFloat(e.detail.value!))}>
                </IonInput>
              </IonItem>
          
              <IonItem>
                <IonLabel color="primary" >longitude:</IonLabel>
                <IonInput class="box" type="number"  id="ymin" color="secondary"disabled = {!location} 
                  value={ymin}
                  onIonChange={e => setYmin(parseFloat(e.detail.value!))}>
                </IonInput>
              </IonItem>
            </IonList>
          </IonItem>
          <IonButton color="primary" type="submit" >Save</IonButton>
        </IonList>
        
      </form>
  </IonContent>
  
  )
}

export default Section_register;