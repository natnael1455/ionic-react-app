import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar ,IonSelect,IonSelectOption} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import background from "./Botania.png";

const Page: React.FC = () => {

  const { name ,id} = useParams<{ name: string; id: string;}>();
  console.log(name)
  console.log(id)
  return (
    <IonPage style={{ backgroundImage: `url(${background})` }}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <table>
            <tbody>
              <tr>
                <td>
                <IonTitle>{name}</IonTitle>
                </td>
                <td>
                <IonSelect>
                  <IonSelectOption>
                    English
                  </IonSelectOption>
                  <IonSelectOption>
                    Finnish
                </IonSelectOption>
              </IonSelect>
                </td>
              </tr>
            </tbody>
          </table>
        </IonToolbar>
      </IonHeader>
      
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} id={id}/>

    </IonPage>
  );
};

export default Page;
