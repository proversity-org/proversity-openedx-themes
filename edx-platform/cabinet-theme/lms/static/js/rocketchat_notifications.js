
class RocketChatNotifications {

    constructor(urlCredentials, courseId, urlSubscriptionsId) {

        this.urlSubscriptionsId = urlSubscriptionsId
        this.authToken = "";
        this.urlService = "";
        this.userId = "";

        let options = {
            type: "GET",
            url: urlCredentials,
            data: {"courseId": courseId},
        }
        this.getCredentials(
            urlCredentials, courseId
        ).then(
            this.getSubscriptionsId.bind(this)
        ).then(
            this.connectWebSocket.bind(this)
        );
    }


    makeAjaxCall(options){
      return new Promise(function(resolve, reject) {
        $.ajax(options).done(resolve).fail(reject);
      });
    }

    getCredentials(urlCredentials, courseId){
        let options = {
            type: "GET",
            url: urlCredentials,
            data: {"courseId": courseId},
            context: this,
        }
        return this.makeAjaxCall(options)
    }

    getSubscriptionsId(data){
        this.authToken = data["auth_token"];
        this.urlService = data["url_service"];
        this.userId = data["user_id"];

        let options = {
            type: "GET",
            url: this.urlSubscriptionsId,
            data:{
                "unread": true,
                "authToken": this.authToken,
                "userId": this.userId,
            },
            context: this,
        }

        return this.makeAjaxCall(options)
    }

    connectWebSocket(data){

        var url, roomIds, tab, indicator, rocketChatSocket;
        url = this.urlService;
        roomIds = data["subscriptions_id"];
        tab = $(".rocketchat-tab");
        tab.children().append($("<span class='rocketchat-indicator'></span>"));
        indicator = $(".rocketchat-indicator")
        rocketChatSocket = new WebSocket(url.replace("http", "ws")+"/websocket");

        let connectRequest = {
            "msg": "connect",
            "version": "1",
            "support": ["1"]
        }

        let loginRequest = {
            "msg": "method",
            "method": "login",
            "id": "42",
            "params":[
                { "resume": this.authToken }
            ]
        }

        let notifyUserRequest = {
            "msg": "sub",
            "id": "unique-id",
            "name": "stream-notify-user",
            "params":[
                this.userId + "/subscriptions-changed",
                false
            ]
        }

        rocketChatSocket.onopen = function (event) {

            rocketChatSocket.send(JSON.stringify(connectRequest));

            rocketChatSocket.send(JSON.stringify(loginRequest));

            rocketChatSocket.send(JSON.stringify(notifyUserRequest));
        };

        rocketChatSocket.onmessage = function (event) {

            var data = JSON.parse(event.data);
            if (data["msg"] == "ping"){
                var pong = {"msg": "pong"};
                rocketChatSocket.send(JSON.stringify(pong));
            }else if (data["msg"] == "changed"){
                try {
                    var args = data["fields"]["args"][1];

                    if(!roomIds.includes(args["rid"]) && args["unread"] > 0){
                        roomIds.push(args["rid"]);
                    }else if (args["unread"] == 0 ){
                        roomIds = roomIds.filter(function(roomId){
                            return roomId !== args["rid"];
                        });
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            if (roomIds.length == 0){
                indicator.css("display", "none");
            }else{
                indicator.css("display", "inline-block");
            }
        }
    }
}
