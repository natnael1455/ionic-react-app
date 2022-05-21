import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonSlide,
    IonImg
    } from '@ionic/react';
import background from "./Botania.png";
import './slides.css';

const SectionCard: React.FC<{name:any}>= ({name}) => {

    return (
        <IonSlide>
            <IonCard  routerLink={`/page/question/${name.key}`} routerDirection="none">
                <IonCardHeader color="primary">
                    <IonCardTitle>{name.englishName}</IonCardTitle>
                    <IonCardSubtitle></IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent color="primary">
                <IonImg src={background} />
                {name.englishDis}
                </IonCardContent>
             </IonCard>
        </IonSlide>
    )
} 

export default SectionCard;
