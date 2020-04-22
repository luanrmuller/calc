function insert(num) {
    document.querySelector('.textview').value = document.querySelector('.textview').value + num;
}

function equal() {
    var exp = document.querySelector('.textview').value;

    if (exp) {
        document.querySelector('.textview').value = eval(exp);
    }
}

function clean() {
    document.querySelector('.textview').value = "";
}
function back() {
    var exp = document.querySelector('.textview').value;
    document.querySelector('.textview').value = exp.substring(0, exp.length - 1);
}