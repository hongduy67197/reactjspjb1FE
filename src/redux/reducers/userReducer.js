const initUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
console.log(localStorage.getItem('user'))
function UserReducer(state = initUser, action) {
    console.log(state);
    switch (action.type) {
        case 'user/login':
            console.log(8, JSON.stringify(action.payload));
            window.localStorage.setItem('user', JSON.stringify(action.payload));
            return { ...action.payload };

        default:
            return { ...state };
    }
}
export default UserReducer;
