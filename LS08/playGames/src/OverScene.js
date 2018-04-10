
var OverLayer = cc.Layer.extend({
    current:null,
    best:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        //重玩文本
        var replayLabel = new cc.LabelTTF("重玩");
        replayLabel.setFontSize(size.width/8);
        replayLabel.setFontFillColor(cc.color.ORANGE);
        replayLabel.enableStroke(cc.color.YELLOW,5);

        //重玩按钮
        var replayItem = new cc.MenuItemLabel(replayLabel,function(){
            cc.director.runScene(new MainScene());
        },this);
        var menu = new cc.Menu(replayItem);
        menu.y = size.height/5;
        this.addChild(menu);

        //logo
        var logo = new cc.LabelTTF("Game Over");
        logo.setFontSize(size.width/8);
        logo.enableStroke(cc.color.RED,5);
        logo.x = size.width / 2;
        logo.y = size.height * 0.8;
        this.addChild(logo);

        //读取本次成绩和最好成绩
        var scoreArr = cc.sys.localStorage;
        var currentScore = scoreArr.getItem("currentScore");
        var bestScore = scoreArr.getItem("bestScore");

        //显示本次成绩
        var current = new cc.LabelTTF("本次成绩："+currentScore);
        current.x = size.width/2;
        current.y = size.height*0.55;
        current.setFontSize(size.width/12);
        this.addChild(current);
        this.current = current;

        //显示最好成绩
        var best = new cc.LabelTTF("最好成绩："+bestScore);
        best.x = size.width/2;
        best.y = size.height*0.45;
        best.setFontSize(size.width/12);
        this.addChild(best);
        this.best = best;

        return true;
    }
});

var OverScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
});