import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../useAppDispatch";
import { login} from "../../redux/features/user/userAuthSlice";

const useAuthStateApp = async <T extends string>(email: T, password: T) => {
    try {
        const dispatch = useAppDispatch()
    const auth = getAuth();
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        dispatch(login(user.uid))
  } catch (e) {
      console.log(e.code,e.messsage)
  }
};

export default useAuthStateApp
