function reverse(){
    console.log('click event captured')
    var content = document.getElementById('message').innerHTML
    var revContent = content.split('').reverse().join('');
    document.getElementById('message').innerHTML = revContent
}