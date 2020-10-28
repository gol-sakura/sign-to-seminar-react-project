import http from '../http-common';


    const getAll = () => {
        return http.get('/seminars');
    }

   const get = (id) => {
        return http.get(`/seminars/${id}`);
    }

    const create = (data) =>  {
        return http.post('/seminars' , data);
    }

    const update = (id, data) => {
        return http.put(`/seminars/${id}`, data);
    }

    const remove = (id) => {
        return http.delete(`/seminars/${id}`);
    }

    const removeAll = () => {
        return http.delete(`/seminars`);
    }

    /* const findByTitle = (title) => {
        return http.get(`/seminars/title=${title}`);
    } */

   

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    /* findByTitle */
};