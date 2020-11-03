/*
 * Copyright (c) Bekir Furkan ZADEGİL
 * ***** Github : Furkan581907 ******
 * ***** İnstagram : Furkann.z ******
 * ***** Web : www.zadegil.com ******
 * ***** mail : zadegil581907@gmail.com ******
 * ***** Bismillahirrahmanirrahim ******
 * Created Date : 2020.
 *
 */

app.factory('chatFactory',['$http','env',($http,env)=> {
    const getMessages = roomId => {
        return $http({
            url:env.SERVICE_URL +'/messages/list',
            method:'GET',
            params:{
                roomId
            }
        }).then(response => {
            return response.data;
        },(err) => {
            console.error(err);
        })
    }
    return {
        getMessages
    }
}]);