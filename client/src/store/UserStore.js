import {makeAutoObservable, values} from "mobx"

export default class UserStore {
    constructor(){
        this._isAuth = true
        this._clientId = 0
        this._User = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setClientId(id) {
        this._clientId = id
    }

    setUser(user) {
        this._User = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    get clientId() {
        return this._clientId;
    }
}