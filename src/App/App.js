import React, {useEffect, useState} from 'react';
import {Header} from "./Header/Header";
import {Table} from "./Table/Table";
import {Sticky} from "./Sticky/Sticky";
import {initializeApp} from "firebase/app";
import {config} from "../db/firebase";
import {collection, getDocs, getFirestore} from "firebase/firestore/lite";

const App = () => {
    const [data,setData] = useState([])


    useEffect(()=>{
        async function fetchData() {
        const app = initializeApp(config);
        const db = getFirestore(app);
        const userCollection = collection(db,"List");
        const users = await getDocs(userCollection)

        users.docs.forEach((doc) => {
            setData(doc.data().list);
        })
        }

        fetchData();

    },[])

    return(
        <>
            <Header />
            <Table data={data}/>
            <Sticky data={data}/>
        </>
    )
}

export {App}