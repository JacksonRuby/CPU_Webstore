var cart = JSON.parse(window.sessionStorage.getItem("cart"));
var subTotal = 0;
var grandTotal = 0;
var shipping = 0;

function loadCart()
{   
    document.getElementById("linkCheckout").innerText = "Checkout (" + (cart[0] + cart[1] + cart[2] + cart[3] + cart[4] + cart[5]) + ")";
    
    var node = document.createElement("li");
    var textNode = document.createTextNode((cart[0] + cart[1] + cart[2] + cart[3] + cart[4] + cart[5]) + " items:");
    node.appendChild(textNode);
    document.getElementById("cartList").appendChild(node);

    var total_i5 = (Math.round((cart[0] * 389.99) * 100) / 100);
    if (cart[0] > 0)
    {        
        var node = document.createElement("li");
        var textNode = document.createTextNode(cart[0] + " - Intel Core i5-9600K: \t$" + total_i5);
        node.appendChild(textNode);
        document.getElementById("cartList").appendChild(node);
    }

    var total_i7 = (Math.round((cart[1] * 579.99) * 100) / 100);
    if (cart[1] > 0)
    {
        var node = document.createElement("li");
        var textNode = document.createTextNode(cart[1] + " - Intel Core i7-9700K: \t$" + total_i7);
        node.appendChild(textNode);
        document.getElementById("cartList").appendChild(node);
    }

    var total_i9 = (Math.round((cart[2] * 749.99) * 100) / 100);
    if (cart[2] > 0)
    {
        var node = document.createElement("li");
        var textNode = document.createTextNode(cart[2] + " - Intel Core i9-9900K: \t$" + total_i9);
        node.appendChild(textNode);
        document.getElementById("cartList").appendChild(node);
    }

    var total_r7 = (Math.round((cart[3] * 519.99) * 100) / 100);
    if (cart[3] > 0)
    {
        var node = document.createElement("li");
        var textNode = document.createTextNode(cart[3] + " - AMD Ryzen 7 3800X: \t$" + total_r7);
        node.appendChild(textNode);
        document.getElementById("cartList").appendChild(node);
    }

    var total_r9 = (Math.round((cart[4] * 749.99) * 100) / 100);
    if (cart[4] > 0)
    {
        var node = document.createElement("li");
        var textNode = document.createTextNode(cart[4] + " - AMD Ryzen 9 3950X: \t$" + total_r9);
        node.appendChild(textNode);
        document.getElementById("cartList").appendChild(node);
    }

    var total_epyc = (Math.round((cart[5] * 6950) * 100) / 100);
    if (cart[5] > 0)
    {
        var node = document.createElement("li");
        var textNode = document.createTextNode(cart[5] + " - AMD EPYC 7742: \t\t$" + total_epyc);
        node.appendChild(textNode);
        document.getElementById("cartList").appendChild(node);
    }

    subTotal = total_i5 + total_i7 + total_i9 + total_r7 + total_r9 + total_epyc;
    grandTotal = subTotal;
    var node = document.createElement("li");
    var textNode = document.createTextNode("Subtotal: $" + (Math.round(subTotal * 100) / 100));
    node.appendChild(textNode);
    document.getElementById("cartList").appendChild(node);
    
    var node = document.createElement("li");
    node.setAttribute("id", "tax");
    var textNode = document.createTextNode("");
    node.appendChild(textNode);
    document.getElementById("cartList").appendChild(node);

    var node = document.createElement("li");
    node.setAttribute("id", "shipping");
    var textNode = document.createTextNode("");
    node.appendChild(textNode);
    document.getElementById("cartList").appendChild(node);

    var node = document.createElement("li");
    node.setAttribute("id", "grandTotal");
    var textNode = document.createTextNode("");
    node.appendChild(textNode);
    document.getElementById("cartList").appendChild(node);
    
}


function calculateTax() 
{

    switch (document.getElementById("txtProvince").selectedIndex)
    {
        case 0:
            //error
        break;
        case 1:
            document.getElementById("tax").innerText = "Tax (5%): $" + (Math.round(subTotal * (.05) * 100) / 100);
            grandTotal += (subTotal * (.05));
        break;
        case 2:
            document.getElementById("tax").innerText = "Tax (12%): $" + (Math.round(subTotal * (.12) * 100) / 100);
            grandTotal += (subTotal * (.12));
        break;
        case 3:
            document.getElementById("tax").innerText = "Tax (13%): $" + (Math.round(subTotal * (.13) * 100) / 100);
            grandTotal += (subTotal * (.13));
        break;
        case 4:
            document.getElementById("tax").innerText = "Tax (15%): $" + (Math.round(subTotal * (.15) * 100) / 100);
            grandTotal += (subTotal * (.15));
        break;
        case 5:
            document.getElementById("tax").innerText = "Tax (15%): $" + (Math.round(subTotal * (.15) * 100) / 100);
            grandTotal += (subTotal * (.15));
        break;
        case 6:
            document.getElementById("tax").innerText = "Tax (5%): $" + (Math.round(subTotal * (.05) * 100) / 100);
            grandTotal += (subTotal * (.05));
        break;
        case 7:
            document.getElementById("tax").innerText = "Tax (15%): $" + (Math.round(subTotal * (.15) * 100) / 100);
            grandTotal += (subTotal * (.15));
        break;
        case 8:
            document.getElementById("tax").innerText = "Tax (5%): $" + (Math.round(subTotal * (.05) * 100) / 100);
            grandTotal += (subTotal * (.05));
        break;
        case 9:
            document.getElementById("tax").innerText = "Tax (13%): $" + (Math.round(subTotal * (.13) * 100) / 100);
            grandTotal += (subTotal * (.13));
        break;
        case 10:
            document.getElementById("tax").innerText = "Tax (15%): $" + (Math.round(subTotal * (.15) * 100) / 100);
            grandTotal += (subTotal * (.15));
        break;
        case 11:
            document.getElementById("tax").innerText = "Tax (14.975%): $" + (Math.round(subTotal * (.14975) * 100) / 100);
            grandTotal += (subTotal * (.14975));
        break;
        case 12:
            document.getElementById("tax").innerText = "Tax (11%): $" + (Math.round(subTotal * (.11) * 100) / 100);
            grandTotal += (subTotal * (.11));
        break;
        case 13:
            document.getElementById("tax").innerText = "Tax (5%): $" + (Math.round(subTotal * (.05) * 100) / 100);
            grandTotal += (subTotal * (.05));
        break;
    }

    document.getElementById("grandTotal").innerText = "Grand Total: $" + (Math.round(grandTotal * 100) / 100);
}

function calculateShipping()
{
    switch (document.getElementById("txtDeliveryTime").selectedIndex)
    {
        case 0:
            //error
        break;
        case 1:
            document.getElementById("shipping").innerText = "Shipping: $40.00";
            shipping = 40;
        break;
        case 2:
            document.getElementById("shipping").innerText = "Shipping: $30.00";
            shipping = 30;
        break;
        case 3:
            document.getElementById("shipping").innerText = "Shipping: $20.00";
            shipping = 20;
        break;
        case 4:
            document.getElementById("shipping").innerText = "Shipping: $10.00";
            shipping = 10;
        break;
    }

    document.getElementById("grandTotal").innerText = "Grand Total: $" + (Math.round((grandTotal + shipping) * 100) / 100);
}