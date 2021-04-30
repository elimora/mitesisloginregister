export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accesToken){
        //for Node.js Express back-end
        return {'x-acces-token': user.accesToken};
    }else{
        return{};
    }
}