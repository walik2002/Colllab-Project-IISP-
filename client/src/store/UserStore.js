import {makeAutoObservable, values} from "mobx"

export default class UserStore {
    constructor(){
        // this._isAuth = false
        this._User = {}
        makeAutoObservable(this)
    }

    // set _isAuth(bool) {
    //     this._isAuth = bool
    // }

    // set _User(user) {
    //     this._User = user;
    // }

    // get _isAuth() {
    //     return this._isAuth;
    // }

    // get user() {
    //     return this._user;
    // }
}