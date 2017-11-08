import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-burger-builder-dc9fb.firebaseio.com/"
})

export default instance;