import "./app3.css"
import $ from 'jquery'

const $square = $('.square')
const active = localStorage.getItem("app3")
$square.toggleClass('active', active==="yes")

$square.on("click",()=>{
    if($square.hasClass("active")){
        $square.removeClass("active")
        localStorage.setItem("app3",'no')
    }else{
        $square.addClass("active")
        localStorage.setItem("app3",'yes')
    }
})