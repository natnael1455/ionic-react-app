import Menu from './components/Menu';
import Page from './pages/Page';
import React,{useState} from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { archiveOutline, archiveSharp, heartOutline, heartSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp,homeSharp, homeOutline } from 'ionicons/icons';

const App: React.FC = () => {

  const [appPages, setAppPage]= useState( [
    {
      title: 'Home',
      url: '/page/Home',
      iosIcon: homeOutline,
      mdIcon:homeSharp
    },
    {
      title: 'AddSection',
      url: '/page/AddSection',
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp
    },
    {
      title: 'Sections',
      url: '/page/Sections',
      iosIcon: heartOutline,
      mdIcon: heartSharp
    },
    {
      title: 'Questions',
      url: '/page/Questions',
      iosIcon: archiveOutline,
      mdIcon: archiveSharp
    },
    {
      title: 'QR',
      url: '/page/QR',
      iosIcon: trashOutline,
      mdIcon: trashSharp
    },
    {
      title: 'Spam',
      url: '/page/Spam',
      iosIcon: warningOutline,
      mdIcon: warningSharp
    }
  ]);

  

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu appPages={appPages}/>
          <IonRouterOutlet id="main">
            <Route path="/page/:name/:id?" component={Page} exact />
            <Redirect from="/" to="/page/Home" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
