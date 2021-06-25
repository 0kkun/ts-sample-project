// どんなクラスにするか
// Humanクラスを継承したCharactorクラスを作りたい。
// Humanクラスは基本情報、Charactorクラスは属性、攻撃力、防御力、素早さ
// enum型のJobからジョブを選んでインスタンスを生成する

enum Job {
    BRAVE    = '勇者',
    SAGE     = '賢者',
    WIZARD   = '魔法使い',
    THIEVES  = '盗賊',
    VILLAGER = '村人'
}

// インターフェース
interface Creature {
    name: string;
    age: number;
    job: string;
    showBasicInfo(): void;
    changeJob(this: Human, newJob: string): void;
}

// 具象クラス
class Human implements Creature {
    constructor (
        public name: string,
        public age: number,
        public job: string
    ) {
        console.log('You successed creating new Human class!');
    }

    public showBasicInfo(this: Human): void {
        console.log(`name:${this.name}, age:${this.age}, job:${this.job}`);
    }

    public changeJob(this: Human, newJob: string): void {
        this.job = newJob;
        console.log('You successed chenging Job!');
    }
}

const myCharactor = new Human('たかし', 17, Job.BRAVE);
myCharactor.showBasicInfo();
