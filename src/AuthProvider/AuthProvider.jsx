import React, {useEffect, useState} from "react";
import {AuthContext} from "../AuthContext/AuthContext";
import {auth} from "./../firebase/firebase.config";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateUserProfile = updateData => {
		return updateProfile(auth.currentUser, updateData);
	};

	const signOutUser = () => {
		return signOut(auth);
	};

	const signInWithGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);

			setLoading(false);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		createUser,
		loginUser,
		user,
		updateUserProfile,
		signOutUser,
		signInWithGoogle,
		loading,
	};

	return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
