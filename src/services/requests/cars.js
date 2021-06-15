import { authAxiosCall } from '../axios';

export const getCars = async () => {
    return authAxiosCall('car/list', {
        method: "GET",
    })
}

export const getCar = async (id) => {
    return authAxiosCall(`car/${id}`, {
        method: "GET",
    })
}