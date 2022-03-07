import $ from 'jquery'

const $but1 = $('#add1')
const $but2 = $('#minus1')
const $but3 = $('#mul2')
const $but4 = $('#divide2')
const $number = $('.number')

let n = parseInt(localStorage.getItem("n")) || 100
$number.text(n)
$but1.on('click',()=>{
    n+=1
    $number.text(n)
    localStorage.setItem("n",n)
})
$but2.on('click',()=>{
    n-=1
    $number.text(n)
    localStorage.setItem("n",n)
})
$but3.on('click',()=>{
    n*=2
    $number.text(n)
    localStorage.setItem("n",n)
})
$but4.on('click',()=>{
    n/=2
    $number.text(n)
    localStorage.setItem("n",n)
})
