import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSplitPane, IonMenu, IonButtons, IonMenuToggle, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonSplitPane contentId="map-content">
        <IonMenu contentId="map-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                Saved Addresses
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            List of addresses will go here.
          </IonContent>
        </IonMenu>
        <IonContent id="map-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuToggle>
                  <IonButton>
                    <IonIcon slot="icon-only" name="menu-outline"></IonIcon>
                  </IonButton>
                </IonMenuToggle>
              </IonButtons>
              <IonTitle>
                Select Location
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <p>
            Eventually we'll have a map here.
          </p>
        </IonContent>
      </IonSplitPane>
    </IonPage>
  );
};

export default Home;
