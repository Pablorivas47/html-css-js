
class Person{
    constructor (name, nickname){
        this._name = name;
        this._nickname = nickname;
    }
    get name (){
        return this._name;
    }

    set name (name){
        this._name = name;
    }

    get nickname (){
        return this._nickname;
    }

    set nickname (nickname){
        this._nickname = nickname;
    }
}