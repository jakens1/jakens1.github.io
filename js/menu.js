var menu_button = document.getElementById("menu-button");
var close_menu = document.getElementById("menu-button-close")
var menu_items = document.querySelectorAll(".link");
var menu_toggled = false;

console.log(menu_items);


menu_button.addEventListener('click', function(){
        
    if(menu_toggled)
    {
        menu_button.src = "images/menu-button.png";
        for(var i = 0; i<menu_items.length;i++)
        {
            menu_items[i].style.visibility = "hidden"
        }
    }else{
        menu_button.src = "images/menu-button-x.png";
        for(var i = 0; i<menu_items.length;i++)
        {
            menu_items[i].style.visibility = "visible"
        }
    }

    menu_toggled = !menu_toggled;
        
    
});