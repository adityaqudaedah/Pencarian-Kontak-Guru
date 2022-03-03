import {useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import firebaseApp from "../../config";

interface UserDataInterface {
  idPeg: string;
  mail: string;
  nama: string;
  number: string;
  sub: string;
  url: string;
}

// interface UsersDataInterface extends Array<UserDataInterface> {}

export const useAppCollection = () => {
  const [users, setUsers] = useState<UserDataInterface[] | null>(null);
  const [collectionExist, setCollectionExist] = useState<boolean>(false)
  let temp: Array<any> = [];

  //get data or collection from firestore
  const getDoc = async () => {

    
    const querySnapShot = await getDocs(collection(firebaseApp, "users"));

    // console.log(querySnapShot.docs)

    if (querySnapShot.docs.length!==0) {
      console.log('this function executed')
       //assign temp
    querySnapShot.forEach((doc) => temp.push(doc.data()));

    //update users state
    setUsers(temp);
      // setCollectionExist(true)
      return true
    }
   return false
  };

  useEffect(() => {
    let identifier: ReturnType<typeof setTimeout>
    
      console.log('executed')
       identifier = setTimeout(() => { getDoc()},1000)
    
   
   
    return () => {
      console.log('clean up')
      clearTimeout(identifier)
    };
  }, [collectionExist]);

  useEffect(() => {

    setCollectionExist(true)
  }, [users])
  

  return users;
};
