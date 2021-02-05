const functions = require("./functions");


// runs before test can be use for testing DB functionality this runs after and before each test
// beforeEach(()=> initDB());
// afterEach(()=> closeDB());

// Runs before all and after all tests
beforeAll(()=> initDB());
afterAll(()=> closeDB());

// to get specific
const nameCheck = () => console.log("Checking names ....");
describe('Checking names', () => {
  beforeEach(() => nameCheck());

  test("User is Josh", () => {
    const user = 'Josh'
    expect(user).toBe('Josh');
  });

  test("User is Karl", () => {
    const user = 'Karl'
    expect(user).toBe('Karl');
  });
});


const initDB = () => console.log("DB intialized ... ");
const closeDB = () => console.log("DB close ... ");


test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 Not to equal 4", () => {
  expect(functions.add(2, 3)).not.toBe(4);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falasy undefined", () => {
  expect(functions.checkvalue(undefined)).toBeFalsy();
});

test("Should be falasy null", () => {
  expect(functions.checkvalue(null)).toBeFalsy();
});

test("Should be falasy zero", () => {
    expect(functions.checkvalue(0)).toBeFalsy();
  });

//   test("Should be falasy num over zero", () => {
//     expect(functions.checkvalue(5)).toBeFalsy();
//   });

// to be is used for primative types for objects and arrays you need toEqual
  test("Should be first and last name", () => {
    expect(functions.createUser()).toEqual({
      firstName: "John",
      lastName: "Tracy"
    });
  });

  // can use logic from import or write in test case in this case
  test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
  });

  test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600); //
  });


  // Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham');
//   });
// });

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});