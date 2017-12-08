var express = require('express');
var router = express.Router();
var fs = require('fs');
global.userContentList = {};
global.userData = {
    "users": [
        {
            "name": "黄小龙",
            "token": "huangxiaolong",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "余夏婷",
            "token": "yuxiating",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "梅军",
            "token": "meijun",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "唐利",
            "token": "tangli",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "吴帅",
            "token": "wushuai",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "侯洁",
            "token": "houjie",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "张奇",
            "token": "zhangqi",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "方荣峰",
            "token": "fangrongfeng",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "肖明昭",
            "token": "xiaomingzhao",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "杨再举",
            "token": "yangzaiju",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "张嵩",
            "token": "zhangsong",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "代01",
            "token": "dai01",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "王娜",
            "token": "wangna",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "黄翠",
            "token": "huangcui",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "熊莉",
            "token": "xiongli",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "马思琪",
            "token": "masiqi",
            "isLogin": false,
            "content": "待输入..."
        }
    ]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
    res.status(200).json({
        code: 0,
        result: {
            users: global.userData.users
        },
        msg: 'success'
    });
});

router.get('/getDataList', function(req, res, next) {
    res.status(200).json({
        code: 0,
        result: global.userContentList,
        msg: 'success'
    });
});

router.post('/login', function(req, res) {
	var red_path = process.cwd();
    var loginName = req.body.userName;

    for(var i = 0; i < global.userData.users.length; i++) {
        if(global.userData.users[i].name == loginName) {
            if(global.userData.users[i].isLogin == true) {
                return res.status(200).json({
                    code: 2,
                    result: {

                    },
                    msg: '此用户已登录, 请勿使用他人账号'
                });
            };
            global.userData.users[i].isLogin = true;
            global.userContentList[global.userData.users[i].token] = {
                name: global.userData.users[i].name,
                content: global.userData.users[i].content,
                jiaban: false
            };

            res.status(200).json({
                code: 0,
                result: {
                    token: global.userData.users[i].token
                },
                msg: '登陆成功'
            });
            break;
        }
    }

    res.status(200).json({
        code: 1,
        result: {

        },
        msg: '用户不存在'
    });


});

function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

module.exports = router;
