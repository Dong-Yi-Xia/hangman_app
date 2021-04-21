export function showNotification(setter){
    setter(true)
    //after 2 second set setter back to false 
    setTimeout(() => {
        setter(false)
    }, 2000)
}