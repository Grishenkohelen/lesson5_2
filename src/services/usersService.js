import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const usersService = {
    getAll: () => axiosService.get(urls.users),
    getByID: (id) => axiosService.get(urls.users.byId(id))
}

export {usersService};