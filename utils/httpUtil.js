var HTTPUtil = {};
 
/**
 * GET请求
 */
HTTPUtil.get = function(url, params, headers) {
    if (params) {
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function (resolve, reject) {
      fetch(url, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }),
          })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              } else {
                  reject({status:response.status})
              }
          })
          .then((response) => {
              resolve(response);
          })
          .catch((err)=> {
            reject({status:-1});
          })
    })
}
 
 
/**
 * POST请求  FormData 表单数据
 */
HTTPUtil.post = function(url, formData, headers) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }),
            body:formData,
          })
          .then((response) => {
              if (response.ok) {
                  return response.json();
              } else {
                  reject({status:response.status})
              }
          })
          .then((response) => {
              resolve(response);
          })
          .catch((err)=> {
            reject({status:-1});
          })
    })
}
 
export default HTTPUtil;

/**
 * 使用说明
let formData = new FormData();
formData.append("id",1060);
      
HTTPUtil.post(url,formData,headers).then((json) => {
	//处理 请求success
   	if(json.code === 0 ){
            //我们假设业务定义code为0时，数据正常
        }else{
             //处理自定义异常
            this.doException(json);
        }
   },(json)=>{
     //TODO 处理请求fail
      
})

 */

