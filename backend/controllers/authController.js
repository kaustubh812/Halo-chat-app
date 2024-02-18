const signup = async (req, res) => {
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body;
    } catch (error) {
        console.log(error)
    }
};



const login = (req, res) => {
    console.log("login user");
};



const logout = (req, res) => {
    console.log("logout user");
};



module.exports = { signup, login, logout };