import React, { useState,useEffect,useRef} from 'react';
import {
    IonContent,
    IonSlides,
    IonText 
    } from '@ionic/react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import {firebaseConfig} from '../fire_conf'; 
import SectionCard from './SectionCard'
import background from "./Botania.png";
import './slides.css';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

const Home: React.FC= () => {
    const [data,setData]=useState<any[]>([]);
    const sectionSlides = useRef<any>();
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
            sectionSlides.current.startAutoplay();
            }
        });
       },[]);

       const slideOpts = {
        initialSlide: 0,
        speed: 400,
        slidesPerView:1,
        spaceBetween:0
      };

    return (
        <IonContent style={{ backgroundImage: `url(${background})` }}>
            <IonText color="primary">
            <p>
                Tuttu Botania-kortti palautuu Botanian lipputarjontaan
                Asiakkaiden kaipaama vuoden voimassa oleva Botania-kortti palautuu Botanian päivälippujen rinnalle. Botania-kortilla sinulla on vapaa pääsy Botanialle aukioloaikojen puitteissa. Lisäksi pääsymaksullisiin tapahtumiin saat Botania-kortilla 10% alennuksen pääsylipun hinnasta. Tulevista tapahtumista kerromme tarkemmin Botanian verkkosivuilla www.botania.fi sekä Facebook ja Instagram tileillämme.
                Botania-kortti on voimassa vuoden ostopäivästä alkaen. Aikuisten Botania-kortin hinta on 40 euroa, 4-15 vuotiaiden kortti on 20 euroa ja perhekortti 95 euroa. Botania-korttien rinnalla myynnissä ovat myös päiväliput. Lisätietoja erilaisista pääsylippuvaihtoehdoista löytyy www.botania.fi sivuilta. Uusimalla korttisi kahden viikon sisällä voimassaoloajan päättymisen jälkeen saat uudesta kortista 10 euron alennuksen. See Less
            </p>
            </IonText>
            <IonSlides mode="md" key={data.length} pager={true} options={slideOpts} ref={sectionSlides} >
                 {data.map(datum => <SectionCard key={datum.key} name={datum}/>)}
            </IonSlides>
        
        </IonContent>

    );

}
export default Home;