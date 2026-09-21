function login(username, password) {
    if (username === 'admin' && password === '999') {
        return true;
    }
    return false;
}
//a
module.exports = login;
