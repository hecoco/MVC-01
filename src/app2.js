import $ from 'jquery'
import  './app2.css'

const $tabBar = $('.app2 .tab-bar')
const $tabContent = $('.app2 .tab-content')
const li = parseInt(localStorage.getItem("li"));
$tabBar.on('click',"li",(e)=>{
    const $li = $(e.currentTarget)
    $li.addClass("selected").siblings().removeClass("selected")
    const index = $li.index();
    $tabContent.children().eq(index).addClass("active").siblings().removeClass("active");
    localStorage.setItem("li",index)
})
$tabBar.children().eq(li).trigger('click')





