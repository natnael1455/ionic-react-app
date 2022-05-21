import React, { useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {
    IonContent,
    IonButton
     } from '@ionic/react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

     const QR: React.FC= () => {

        const [encodedText,setEncodedText] =useState("here");
        const [position, setPosition] = useState<Geoposition>();
        const [redirect,setRedirect] = useState(null)
        let history = useHistory();
       
        const scanCode = async () => {
            setEncodedText("we here");
            const data = await BarcodeScanner.scan();
            setEncodedText(data.text);
            history.push(`/page/Questions/${data.text}`);
          };
          
          const getLocation = async () => {
           
            try {
                const position = await Geolocation.getCurrentPosition();
                setPosition(position);
                
            } catch (e) {
               
            }
        }
        return(
            <IonContent>
                <h1>{encodedText}</h1>
                <h1>{position?.coords.latitude}</h1>
                <h1>{position?.coords.longitude}</h1>
                <IonButton onClick={scanCode}>Scan QR</IonButton>
                <IonButton onClick={getLocation}>Gps</IonButton>
            </IonContent>
        );
        
     }
     
     export default QR;