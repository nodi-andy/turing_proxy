module.exports = {
    index: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "Hi ya! :)",
        })
    },

    signup: (req, res) => {
        console.log("SIGNUP CALLED");
        const { email, gender, username, password, phone} = req.body;
        const newUserObj = { email, gender, username, password, phone};
        return res.status(200).json({
            success: true,
            message: "signup successful"
        });
    
        
    }

}
