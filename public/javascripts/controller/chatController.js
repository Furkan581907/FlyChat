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

app.controller('chatController',['$scope','chatFactory','userFactory',($scope,chatFactory,userFactory)=>{

    /**
     * initialization
     */

    function init(){
        userFactory.getUser().then(user => {
            $scope.user=user;
        })
    }
init();

    /**
     * Angular veriables
     */
    $scope.onlineList = [];
    $scope.roomList = [];
    $scope.activeTab = 1;
    $scope.chatClicked = false;
    $scope.loadingMessages = false;
    $scope.chatName = "";
    $scope.roomId = "";
    $scope.message = "";
    $scope.messages = [];
    $scope.user = {};


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

    socket.on('receiveMessage',message => {
        $scope.messages[message.roomId].push({
            message:message.message,
            userId:message.userId,
            username:message.username,
            surname:message.surname,
        });
        $scope.$apply();
        console.log(message);
    })

    $scope.newMessage = () => {
        if($scope.message.trim()!=='')
        {
            socket.emit('newMessage',{
                message:$scope.message,
                roomId:$scope.roomId
            })
            console.log($scope.user.name);

            $scope.messages[$scope.roomId].push({
                message:$scope.message,
                userId:$scope.user._id,
                username:$scope.user.name,
                surname:$scope.user.surname,
            });

            $scope.message = "";
        }

    }

    $scope.switchRoom = room => {
        $scope.chatName = room.name;
        $scope.chatClicked = true;
        $scope.roomId = room.id;
        if(!$scope.messages.hasOwnProperty(room.id))
        {
            $scope.loadingMessages=true;
            chatFactory.getMessages(room.id).then(data => {
                console.log(data);
                $scope.messages[room.id] = data;
                $scope.loadingMessages=false;
            })
        }

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