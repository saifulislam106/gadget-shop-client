import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // const CreateUser = (email, password) => {
    //     return createUserWithEmailAndPassword(auth, email, password)
    // };

    const CreateUser = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created:", userCredential.user);
            return userCredential.user; // Return user info if needed
        } catch (error) {
            console.error("Error creating user:", error);
            return null;
        }
    };

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // google login 

    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const LogoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe; // return directly without wrapping in another function
    }, []);

    const authInfo = {
        user,
        loading,
        CreateUser,
        LoginUser,
        LogoutUser,
        GoogleLogin,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;