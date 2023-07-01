const registerUser = (req, res)=>{
    const usetDetails = req.body;
    res.json({
        success: true,
        name:usetDetails.name,
        password: usetDetails.password,
        Email: usetDetails.email
    })
}

module.exports = registerUser;