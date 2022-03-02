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

interface UsersDataInterface extends Array<UserDataInterface> {}

export const useAppCollection = () => {
  const [users, setUsers] = useState<UsersDataInterface[] | null>(null);
  let temp: Array<any> = [];

  //get data or collection from firestore
  const getDoc = async () => {
    const querySnapShot = await getDocs(collection(firebaseApp, "users"));

    //assign temp
    querySnapShot.forEach((doc) => temp.push(doc.data()));

    //update users state
    setUsers(temp);
  };

  useEffect(() => {
    let identifier: ReturnType<typeof setTimeout>
    
    identifier = setTimeout(()=> getDoc(),100)
   
    return () => {
      clearTimeout(identifier)
    };
  }, []);

  return users;
};
