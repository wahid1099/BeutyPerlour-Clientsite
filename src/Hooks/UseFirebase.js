import React, {useEffect, useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut ,getIdToken
} from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";


initializeFirebase();
const UseFirebase = () => {

    const [user,setUser]=useState({});
    const[isLoading,setIsLoading]=useState(true);
    const [autherror,SetAuthError]=useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    //authentication
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    //registering new user
    const registerUser=(email,password,name,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                SetAuthError('');
                const newUser={email,displayName:name};
                //seving data to state
                setUser(newUser);
                //save user to databse
                saveUser(email,name,'POST');
                ///sending data firebase after creation
                updateProfile(auth.currentUser,{
                    displayName:name
                }).then(()=>{

                }).catch((error)=>{
                    SetAuthError(error);
                });
                history.replace('/');

            }).catch((error)=>{
            SetAuthError(error.message);
        }).finally(()=>setIsLoading(false))
    }

    //logging in user with email and pass

    const loginUser=(email,password,location,history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{

                const destination=location?.state?.from || '/';
                history.replace(destination);
                SetAuthError('');

            }).catch((error)=>{
            SetAuthError(error.message);
        }).finally(()=>setIsLoading(false))
    }

    //loggin the user wtih google account
    const signInwithGoogle=(location,history)=>{
        setIsLoading(true);
        signInWithPopup(auth,googleProvider)
            .then((result)=>{
                const user=result.user;
                saveUser(user.email,user.displayName,'PUT');
                setUser(result.user)
                const destination = location?.state?.from || '/';
                history.replace(destination);
                SetAuthError('');
            }).catch((error)=>{
            SetAuthError(error.message);
        }).finally(()=>{
            setIsLoading(false);
        })
    }
//sendting data to firebase after log in
    useEffect(()=>{
        const unsubcribed=onAuthStateChanged(auth,(user)=>{
            if (user){
                setUser(user);
                getIdToken(user)
                    .then(idToken=>{
                        setToken(idToken);
                    })
            }else {
                setUser({});
            }
            setIsLoading(false)
        });

    },[]);
//making admin
    useEffect(() => {
        fetch(`https://warm-gorge-48984.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email]);
    //loggin out the user
    const logout=()=>{
        setIsLoading(true);
        signOut(auth).then(()=>{

        }).catch((error)=>{

        })
            .finally(()=>{
                setIsLoading(false);
            })
    }
    //saing user data to database
    const saveUser=(email,displayName,method)=>{
        const user={email,displayName};
        console.log(user);
        fetch('https://warm-gorge-48984.herokuapp.com/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
            .then()


    }



    return  {
        user,
        isLoading,
        autherror,
        registerUser,
        loginUser,
        signInwithGoogle,
        logout,
        token,admin

    }
};

export default UseFirebase;