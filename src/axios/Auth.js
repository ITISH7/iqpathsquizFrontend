import axios from "axios";


export class AuthService{

    async createAccount({name, email, mobileNo, password}) {
       try {
        const userAccount = await axios.post("/user/register", {name, email, mobileNo, password});
        if(userAccount){
            return this.login({email, password});
        }
        else {
            throw new Error("User account creation failed");
        }
       } catch (error) {
            console.log("AuthService :: createAccount :: error", error);
            throw error;
       }
    }


    async login({email, password}){
        try {
            return await axios.post("/user/login", {email, password});
            localStorage.removeItem('user');
        } catch (error) {
            console.log("AuthService :: login :: error", error);
            throw error;
        }
    }

    async logout(){
        try {
            await  axios.post("/user/logout");
        } catch (error) {
            console.log("AuthService :: logout :: error", error);
            throw error;
        }
    }

}

