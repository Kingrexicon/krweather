
let myName = "kunle"
const test = () => {
    console.log(myName)
    delay()
}

const delay = () => {
    setTimeout(() => {
        myName = "sola"
    }, 3000
    )

}