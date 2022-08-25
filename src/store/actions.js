// https://github.com/academind/react-complete-guide-code/blob/19-advanced-redux/code/06-finished/src/App.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from "../firebaseConfig"

import { initActions } from './store';

export const fetchActivities = () => {
    return async (dispatch) => {
        const fetcher = async () => {
            firebase.initializeApp(firebaseConfig);
            const db = firebase.firestore()
            const res = await db.collection('counters').get();
            const parsedRes = res.docs.map(doc => { return doc.data() })
            return parsedRes
        }

        const data = await fetcher()
        
        dispatch(
            initActions.getActivities(data)
        )

    }
}