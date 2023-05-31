import { getApp } from "firebase/app";
import {
	signInWithRedirect,
	getAuth,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

class AuthService {
	constructor(firebaseApp) {
		this.auth = getAuth(firebaseApp);
	}

	waitForUser(callback) {
		return onAuthStateChanged(this.auth, (userCred) => {
			callback(userCred);
		});
	}

	loginWithGoogle() {
		return signInWithRedirect(this.auth, new GoogleAuthProvider())
			.then((userCred) => {
				return {
					user: userCred.user,
				};
			})
			.catch((error) => {
				return {
					error: error.message,
				};
			});
	}
	async logout() {
		await signOut(this.auth);
	}

	
}

export default new AuthService(getApp());