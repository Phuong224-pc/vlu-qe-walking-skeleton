const login = require('./login');

test('Dang nhap thanh cong voi admin/123', () => {
    expect(login('admin', '123')).toBe(true);
});

test('Dang nhap me hoac sai mat khau', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
});
