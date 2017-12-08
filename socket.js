var sk = {};

function initIo(server) {
    var io = require('socket.io')(server);

    io.on('connection', function (socket) {
        // 监听客户端过来的消息
        listen(socket);

        console.log('初始化成功');
    });
}

function listen(socket) {
    socket.on('getAllUsers', function (say) {
        socket.token = say.token;
        sk[say.token] = socket;

        // 广播用户信息
        sendToAll();

        // 系统提醒
        notifyAllUser({
            type: 'sysm',
            msg: getUserWidthToken(socket.token).name + '进入系统'
        })

        // 将消息列表广播出去
        sendMsgListToAll();
    });

    // 收到消息
    socket.on('sendEnterData', function (say) {
        global.userContentList[say.token].content = say.content;
        // 将消息列表广播出去
        sendMsgListToAll();
    });

    // 打卡提醒
    socket.on('daka', function (say) {
        // 系统提醒
        notifyAllUser({
            type: 'userMsg',
            name: getUserWidthToken(say.token).name,
            msg: '记得打卡!'
        })
    });

    // 催一下
    socket.on('quike', function (say) {
        // 系统提醒
        notifyAllUser({
            type: 'userMsg',
            name: getUserWidthToken(say.token).name,
            msg: '快点吧, 等的花儿都谢了!'
        })
    });

    // 是否加班
    socket.on('jiaban', function (say) {
        global.userContentList[say.token].jiaban = say.jiaban;
        // 将消息列表广播出去
        sendMsgListToAll();
    });

    // 用户交谈
    socket.on('userSayMsg', function (say) {
        // 系统提醒
        notifyAllUser({
            type: 'userMsg',
            name: getUserWidthToken(say.token).name,
            msg: say.msg
        })
    });

    socket.on('disconnect', function (say) {
        if(!socket.token) return;
        for(var i = 0; i < global.userData.users.length; i++) {
            if(global.userData.users[i].token == socket.token) {
                global.userData.users[i].isLogin = false;
                break;
            }
        }

        // 广播用户信息
        sendToAll();

        // 系统提醒
        notifyAllUser({
            type: 'sysm',
            msg: getUserWidthToken(socket.token).name + '退出系统'
        })
    });
}

function sendToAll() {
    for(var attr in sk) {
        sk[attr].emit('allUsers', global.userData);
    }
}

function sendMsgListToAll() {
    for(var attr in sk) {
        sk[attr].emit('sendMsgList', global.userContentList);
    }
}

function notifyAllUser(msg) {
    for(var attr in sk) {
        sk[attr].emit('notify', msg);
    }
}

function getUserWidthToken(token) {
    for(var i = 0; i < global.userData.users.length; i++) {
        if(global.userData.users[i].token == token) {
            return global.userData.users[i];
        }
    }
}

module.exports = {
    initIo: initIo
};
