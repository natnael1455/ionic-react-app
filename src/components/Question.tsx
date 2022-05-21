
import React, { useState} from 'react';
import {
    IonSlide,
    IonRadioGroup,
    IonList,
    IonLabel, 
    IonRadio, 
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonButton
    } from '@ionic/react';
   

    const Choice: React.FC<{name:any}>= ({name}) => {
    
        return (
            <IonItem>
              <IonRadio value={name.id} />
              <IonLabel>{name.en}</IonLabel>          
            </IonItem>
        )
    } 

const Question: React.FC<{name:any}>= ({name}) => {
   
    const [message,setMessage]=useState("ans");
    const [choice,setChoice]=useState("");
    const choices = name.choices;
    const answer = name.answer;
    const check_answer =()=>{
        if(choice === answer){
            setMessage("you got the answer")
        }
        else{
            setMessage("you didn't got the answer try again")
        }
    }

    return (
        <IonSlide>
            <IonCard>
                <IonCardHeader color="primary">
                    <IonCardTitle>{name.question.en}</IonCardTitle>
                    <IonCardSubtitle>{message}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent color="primary">
                    <IonList>
                        <IonRadioGroup onIonChange={e => setChoice(e.detail.value!)}>
                            {choices.map((choice:any,index:any) =><Choice key={index} name={choice}/>)}
                        </IonRadioGroup>
                    </IonList>
                    <IonButton onClick={check_answer}>Check</IonButton>
                </IonCardContent>
            </IonCard>
        </IonSlide>
   
    )
} 

export default Question;
