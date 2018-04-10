
var MainLayer = cc.Layer.extend({
    arr:[],
    plane:null,
    enemy:null,
    speed:4,
    score:0,
    scoreLabel:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        /*实现无限滚屏*/
        /*var bg = new cc.Sprite(res.bg1_png);
        bg.x = cc.winSize.width/2;
        bg.y = cc.winSize.height/2;
        this.addChild(bg);
        this.arr[0] = bg;

        var bg1 = new cc.Sprite(res.p1_png);
        bg1.x = cc.winSize.width/2;
        bg1.y = cc.winSize.height/2+bg.getBoundingBox().height;
        this.addChild(bg1);
        this.arr[1] = bg1;*/
        //将背景图存入数组
        for(var i = 0;i < 2; i++){
            var bg = new cc.Sprite(res.bg1_png);
            bg.x = cc.winSize.width/2;
            bg.y = cc.winSize.height/2+i*(bg.getBoundingBox().height);
            this.addChild(bg);
            this.arr[i] =bg;
        }
        this.schedule(this.bgCallBack,0.001);

        /*添加随机敌人精灵*/
        var enemy = new cc.Sprite(res.p2_png);
        enemy.setRotation(180);
        enemy.x = size.width/2;
        enemy.y = size.height;
        this.addChild(enemy);
        this.enemy = enemy;
        this.schedule(this.enemyCallBack,0.001);

        /*我方飞机*/
        var p1 = new cc.Sprite(res.p1_png);
        p1.x = cc.winSize.width/2;
        p1.y = cc.winSize.height/3;
        this.addChild(p1);
        this.plane = p1;

        /*左移右移*/
        var leftmoveMenuItem = new cc.MenuItemFont("左移",function(){
            p1.x -= 20;
        },this);
        var rightmoveMenuItem = new cc.MenuItemFont("右移",function(){
            p1.x += 20;
        },this);
        var menu = new cc.Menu(leftmoveMenuItem,rightmoveMenuItem);
        menu.setPosition(0,0);
        leftmoveMenuItem.setPosition(size.width*0.2,size.height*0.2);
        leftmoveMenuItem.setColor(cc.color.RED);
        rightmoveMenuItem.setPosition(size.width*0.8,size.height*0.2);
        rightmoveMenuItem.setColor(cc.color.RED);
        this.addChild(menu);

        /*分数标签*/
        var scoreLabel = new cc.LabelTTF("0米","",size.width/10);
        scoreLabel.x = size.width/2;
        scoreLabel.y = size.height - 100;
        scoreLabel.setColor(cc.color.YELLOW);
        this.addChild(scoreLabel);
        this.scoreLabel = scoreLabel;

        /*判断相碰*/

        return true;
    },
    bgCallBack:function(){
        for(var i in this.arr){
            //this.arr[i].y -= 2;
            if(this.arr[i].y < -720){
                this.arr[i].y += 2 * 1440;
            }
            this.arr[i].y -= 5;
            this.score += 1;
            this.scoreLabel.setString(this.score+'米');
        }
    },
    enemyCallBack:function(){
        if(this.enemy.y < 0){
            this.enemy.y = cc.winSize.height;
            this.enemy.x = cc.winSize.width * cc.random0To1();
            this.speed += 2;
        }else{
            this.enemy.y -= this.speed;
            if(cc.rectContainsPoint(this.plane.getBoundingBox(),this.enemy.getPosition())){
                cc.log("碰到了！");
                var scoreArr = cc.sys.localStorage;
                scoreArr.setItem("currentScore",this.score);
                if(this.score > scoreArr.getItem("bestScore")){
                    scoreArr.setItem("bestScore",this.score);
                }
                cc.director.runScene(new OverScene());
            }
        }
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});