export function showNotification(setter){
    setter(true)
    //after 2 second set setter back to false 
    setTimeout(() => {
        setter(false)
    }, 2000)
}



export function checkWin(correct, wrong, word){
    let status = 'win'
    //check for win, if correct does not have the letter, true, game in progress
    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = ''
        }
    })
    //check for lose
    if(wrong.length === 6) status = 'lose'

    return status
}