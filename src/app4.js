import "./app4.css"
import $ from 'jquery'

const $circle = $(".circle")
// const app4 = localStorage.getItem("app4")
// $circle.toggleClass('active', app4==="yes")

$circle.on("mouseenter", () => {
    // if ($circle.hasClass("active")) {
    //     $circle.removeClass("active")
    //     localStorage.setItem("app4", "no")
    // } else {
    $circle.addClass("active")
    // localStorage.setItem("app4", "yes")
    // }
}).on("mouseleave", () => {
    $circle.removeClass("active")
})