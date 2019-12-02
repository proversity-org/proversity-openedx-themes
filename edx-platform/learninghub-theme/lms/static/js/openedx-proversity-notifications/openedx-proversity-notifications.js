function initializeOpenedxProversityNotifications(iconUrl) {

    const webSocketBridge = new channels.WebSocketBridge();
    webSocketBridge.connect('/submissions/');
    webSocketBridge.listen();

    webSocketBridge.demultiplex('submissions', function(action, stream) {
        var data = action.data;
        checkNotifications(data, iconUrl);
        console.log(action, stream);
    });

    webSocketBridge.demultiplex('submissions_score', function(action, stream) {
        var data = action.data;
        checkNotifications(data, iconUrl);
        console.info(action, stream);
    });
}

function checkNotifications(data, iconUrl) {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        notifyUser(data.message, iconUrl, data.title, data.relative_url);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                notifyUser(data.message, iconUrl, data.title, data.relative_url);
            }
        });
    }

}

function notifyUser(message, icon, title, url) {
    var notification = new Notification(
        title,
        {
            body: message + ' ' + window.location.origin + url,
            icon: icon,
        }
    );

    setTimeout(notification.close.bind(notification), 10000);
}