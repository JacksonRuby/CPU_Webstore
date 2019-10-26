var cart;

function loadCart()
{ 
    if (window.sessionStorage.getItem("cart") == null)
    {
        cart = [0,0,0,0,0,0];
    }
    else
    {
        cart = JSON.parse(window.sessionStorage.getItem("cart"));
    }
    document.getElementById("linkCheckout").innerText = "Checkout (" + (cart[0] + cart[1] + cart[2] + cart[3] + cart[4] + cart[5]) + ")";
}

function addi5ToCart()
{
    cart[0] += 1;
    saveInfo();
}

function addi7ToCart()
{
    cart[1] += 1;
    saveInfo();
}

function addi9ToCart()
{
    cart[2] += 1;
    saveInfo();
}

function addRyzen7ToCart()
{
    cart[3] += 1;
    saveInfo();
}

function addRyzen9ToCart()
{
    cart[4] += 1;
    saveInfo();
}

function addEpycToCart()
{
    cart[5] += 1;
    saveInfo();
}

function saveInfo()
{
    window.sessionStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("linkCheckout").innerText = "Checkout (" + (cart[0] + cart[1] + cart[2] + cart[3] + cart[4] + cart[5]) + ")";
}