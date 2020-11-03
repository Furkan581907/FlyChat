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

app.controller('chatController',['$scope',($scope)=>{

    /**
     * Angular veriables
     */
    $scope.onlineList = [];
    $scope.roomList = [];
    $scope.activeTab = 1;
    $scope.chatClicked = false;
    $scope.chatName = "";
    $scope.roomId = "";
    $scope.message = "";

    /**
     * Socket.io event handling
     */

    const socket = io.connect('http://localhost:3000');
    socket.on('onlineList',users => {
        $scope.onlineList = users;
        $scope.$apply();
    })

    socket.on('roomList',rooms => {
        $scope.roomList = rooms;
        $scope.$apply();
    })

    $scope.newMessage = () => {
        console.log($scope.message);
        socket.emit('newMessage',{
            message:$scope.message,
            roomId:$scope.roomId
        })
        $scope.message = "";
    }

    $scope.switchRoom = room => {
        $scope.chatName = room.name;
        $scope.chatClicked = true;
        $scope.roomId = room.id;
    }

    $scope.newRoom = () => {
        //let randomName = Math.random().toString(36).substring(7);
        let roomName = window.prompt("Enter room name");
        if(roomName !== '' && roomName != null)
            socket.emit('newRoom',roomName)
    }

    $scope.changeTab = tab =>{
        $scope.activeTab = tab
    }

}])