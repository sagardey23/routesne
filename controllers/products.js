const getDetails = (req, res) => {
    res.send({
        name: "sagar",
        course: "MERN",
        age: "27"
    })
}

module.exports.getDetails = getDetails