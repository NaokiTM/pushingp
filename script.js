function buttonClick() {
    let sub = document.getElementById('sub')
    let subvalu = sub.innerHTML
    let subvalue = parseInt(subvalu)

    let newsubvalue = ++subvalue
    sub.innerHTML = newsubvalue
    
    if(subvalue == 10) {
        alert('You pushed P 10 times!')
    }

    if(subvalue == 100) {
        alert('You pushed P 100 times!')
        
    }

    if(subvalue == 500) {
        alert('You should probably stop now')
    }
    
    if(subvalue == 1000) {
        alert('You have been pushing too much P; its time to stop')
    }

}
