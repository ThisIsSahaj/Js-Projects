const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "123456789"
const specialSet = "!@#$%&*?"

const getRandom = (data) => {

    return data[Math.floor(Math.random() * data.length)]
}

const getPassword = (password = "") => {

}

getPassword();