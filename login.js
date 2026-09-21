function login(username, password) {
    if (username === 'admin' && password === '9999') {
        return true;
    }
    return false;
}
//a
module.exports = login;
