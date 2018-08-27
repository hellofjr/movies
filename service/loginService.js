import httpUtil from '../utils/httpUtil';

let loginService = {};

loginService.login = function(userName, password){
    let url = 'http://127.0.0.1:38500/api/UserData/GetCities';
    let param = {
        userName: userName,
        password: password
    };
    return httpUtil.get(url,null,'')
}



export default loginService;