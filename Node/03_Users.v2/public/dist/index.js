var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function handleGetUser1() {
    return __awaiter(this, void 0, void 0, function () {
        var data, user, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/api/user1')];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, error = data.error;
                    renderUser(user);
                    if (error)
                        throw new Error(error);
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetUser2() {
    return __awaiter(this, void 0, void 0, function () {
        var data, user, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/api/user2')];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, error = data.error;
                    renderUser(user);
                    if (error)
                        throw new Error(error);
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetUser3() {
    return __awaiter(this, void 0, void 0, function () {
        var data, user, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/api/user3')];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, error = data.error;
                    renderUser(user);
                    if (error)
                        throw new Error(error);
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetUser4() {
    return __awaiter(this, void 0, void 0, function () {
        var data, user, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/api/user4')];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, error = data.error;
                    renderUser(user);
                    if (error)
                        throw new Error(error);
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetUser5() {
    return __awaiter(this, void 0, void 0, function () {
        var data, user, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/api/user5')];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, error = data.error;
                    renderUser(user);
                    if (error)
                        throw new Error(error);
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var data, users, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/api/get-users')];
                case 1:
                    data = (_a.sent()).data;
                    users = data.users, error = data.error;
                    console.log(users);
                    renderAllUsers(users);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDeleteUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, users, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios["delete"]('/api/delete-user', { data: { userId: userId } })];
                case 1:
                    data = (_a.sent()).data;
                    users = data.users, error = data.error;
                    console.log(users);
                    renderAllUsers(users);
                    return [2 /*return*/];
            }
        });
    });
}
function handleUpdateAge(event, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var newAge, data, users, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newAge = event.target.valueAsNumber;
                    return [4 /*yield*/, axios.put('/api/update-age', { userId: userId, newAge: newAge })];
                case 1:
                    data = (_a.sent()).data;
                    users = data.users, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderAllUsers(users);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateFirstName(event, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, data, users, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    firstName = event.target.value;
                    console.log(firstName);
                    return [4 /*yield*/, axios.put('/api/update-first-name', { userId: userId, firstName: firstName })];
                case 1:
                    data = (_a.sent()).data;
                    users = data.users, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderAllUsers(users);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateLastName(event, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var lastName, data, users, error, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    lastName = event.target.value;
                    return [4 /*yield*/, axios.put('/api/update-last-name', { userId: userId, lastName: lastName })];
                case 1:
                    data = (_a.sent()).data;
                    users = data.users, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderAllUsers(users);
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleAddUser(event) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, lastName, age, data, users, error, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    firstName = event.target.elements.firstName.value;
                    lastName = event.target.elements.lastName.value;
                    age = event.target.elements.age.valueAsNumber;
                    if (!firstName || !lastName || !age)
                        throw new Error('All fields are requierd!');
                    console.log(firstName);
                    console.log(lastName);
                    console.log(age);
                    return [4 /*yield*/, axios.post('/api/add-user', { firstName: firstName, lastName: lastName, age: age })];
                case 1:
                    data = (_a.sent()).data;
                    users = data.users, error = data.error;
                    if (error)
                        throw new Error(error);
                    renderAllUsers(users);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderAllUsers(users) {
    var root = document.querySelector('#root');
    var html = '';
    users.forEach(function (user) {
        html +=
            "<p>" + user.firstName + " " + user.lastName + ", " + user.age + " years old.\n            <input type=\"text\" placeholder=\"First Name:\" onblur=\"handleUpdateFirstName(event, '" + user.uid + "')\"/>\n            <input type=\"text\" placeholder=\"Last Name:\" onblur=\"handleUpdateLastName(event, '" + user.uid + "')\"/>\n            <input type=\"number\" placeholder=\"Age:\" onblur=\"handleUpdateAge(event, '" + user.uid + "')\"/>\n            <button onclick=handleDeleteUser('" + user.uid + "')>Delete User</button>\n        </p>";
    });
    root.innerHTML = html;
}
function renderUser(user) {
    var root = document.querySelector('#root');
    var html = '';
    html += "<p>" + user.firstName + " " + user.lastName + ", " + user.age + " years old.</p>";
    root.innerHTML = html;
}
