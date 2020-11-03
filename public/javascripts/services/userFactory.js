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

app.factory('userFactory',['$http','env',($http,env)=> {
    const getUser = () => {
        return $http({
            url:env.SERVICE_URL +'/getUser',
            method:'GET',
        }).then(response => {
            return response.data;
        },(err) => {
            console.error(err);
        })
    }
    return {
        getUser
    }
}]);