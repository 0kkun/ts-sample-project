"use strict";
// どんなクラスにするか
// Humanクラスを継承したCharactorクラスを作りたい。
// Humanクラスは基本情報、Charactorクラスは属性、攻撃力、防御力、素早さ
// enum型のJobからジョブを選んでインスタンスを生成する
var Job;
(function (Job) {
    Job["BRAVE"] = "\u52C7\u8005";
    Job["SAGE"] = "\u8CE2\u8005";
    Job["WIZARD"] = "\u9B54\u6CD5\u4F7F\u3044";
    Job["THIEVES"] = "\u76D7\u8CCA";
    Job["VILLAGER"] = "\u6751\u4EBA";
})(Job || (Job = {}));
// 具象クラス
class Human {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        console.log('You successed creating new Human class!');
    }
    showBasicInfo() {
        console.log(`name:${this.name}, age:${this.age}, job:${this.job}`);
    }
    changeJob(newJob) {
        this.job = newJob;
        console.log('You successed chenging Job!');
    }
}
const myCharactor = new Human('たかし', 17, Job.BRAVE);
myCharactor.showBasicInfo();
//# sourceMappingURL=human.js.map