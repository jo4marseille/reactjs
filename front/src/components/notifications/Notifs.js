import React, {useEffect} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css'
import './Notifs.css'


function Notifs() {

    useEffect(() => {
        const timer = setTimeout(() => {
            return NotificationManager.info('Football : Victoire du Brésil contre l\'Allemagne 7-2');
        }, 20000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            return NotificationManager.info('Tennis : Tsonga vs Ferrero début du match dans 5 minutes sur France 4');
        }, 25000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            return NotificationManager.info('Sprint 100m : Nouveau record du monde d\'Usain Bolt 9,51 secondes');
        }, 45000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            return NotificationManager.info("Natation Médaille d'or pour l'équipe de France");
        }, 65000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <NotificationContainer/>
        </div>
    );

}

export default Notifs;