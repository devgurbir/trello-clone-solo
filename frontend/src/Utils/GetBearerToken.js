function getBearerToken(){
    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return cookieValue ? cookieValue = cookieValue.split("%20")[1] : false
}

export default getBearerToken