function buttonClick() {
    let sub = document.getElementById('sub')
    let subvalu = sub.innerHTML
    let subvalue = parseInt(subvalu)
    console.log(subvalu)

    let newsubvalue = ++subvalue
    sub.innerHTML = newsubvalue
}