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
            "name": "方嵘峰",
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
            "name": "代淩漪",
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
        },
        {
            "name": "刘鹏",
            "token": "liupeng",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "王晶",
            "token": "wangjing",
            "isLogin": false,
            "content": "待输入..."
        },
        {
            "name": "王曾亦",
            "token": "wangzengyi",
            "isLogin": false,
            "content": "待输入..."
        }
    ]
};

global.userContentList = {};

for(var i = 0; i < global.userData.users.length; i++) {
    var token = global.userData.users[i].token;

    global.userContentList[token] = {};
    global.userContentList[token].name = global.userData.users[i].name;
    global.userContentList[token].jiaban = false;
    global.userContentList[token].content = '';
    global.userContentList[token].date = new Date().getTime();
}