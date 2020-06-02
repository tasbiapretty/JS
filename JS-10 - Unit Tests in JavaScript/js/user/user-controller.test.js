const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1224,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1224,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
  test('add user to userController', () => {    
    let user = new User(1234,"tasbia", "tas@mail.com");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });
  test('remove user to userController', () => {    
    let user = new User(1234,"tasbia", "tas@mail.com");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
  test('find user by email ', () => {
    userController.findByEmail('tas@mail.com');
    expect(userController.findByEmail('tas@mail.com')).toEqual({"email": "tas@mail.com", "id": 1234, "name": "tasbia"});
  });
  test('find user by email ', () => {
    userController.findByEmail('santiago@generation.org');
    expect(userController.findByEmail('santiago@generation.org')).toEqual({"email": "santiago@generation.org", "id": 1224, "name": "Santiago"});
  });
  test('find user by id ', () => {
    userController.findById(1234);
    expect(userController.findById(1234)).toEqual({"email":"tas@mail.com","id": 1234, "name": "tasbia"});
  });
  test('find user by id ', () => {
    userController.findById(1224);
    expect(userController.findById(1224)).toEqual({"email":"santiago@generation.org","id": 1224, "name": "Santiago"});
  });
