let crauser_1 = [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gif--new_1200x.gif?v=1658249062",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/deal-of-the-day-new_1200x.png?v=1657957011",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A-131-Banner_0e6d2056-3bd5-4ee0-8bd3-7a2a50e30e30_1200x.jpg?v=1657953240",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wireless-banner_1_1200x.png?v=1657290971",
]

let leftBtn = document.querySelector("#crauser-1>:nth-child(2)");
let rightBtn = document.querySelector("#crauser-1>:nth-child(3)");
let crauser = document.querySelector("#crauser-1>img");

let imageState = 0;
rightBtn.addEventListener("click", function () {

    imageState++;
    if (imageState === crauser_1.length) {
        imageState = 0;
    }
    crauser.src = crauser_1[imageState];
});

leftBtn.addEventListener("click", function () {
    imageState--;
    if (imageState < 0) {
        imageState = crauser_1.length - 1;
    }
    crauser.src = crauser_1[imageState];
});


/*-------------------------------------------------Best Seller----------------------------------------------------*/

let best_sellers = [
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MG_600x.png?v=1657775492",
        prodName: "boAt Airdopes 131 PRO",
        review: "5.0 | 2 reviews",
        price: "₹1299",
        save: "You Save: ₹1691 (57%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
        prodName: "boAt Airdopes 131 - Wireless Earbuds",
        review: "4.8 | 1116 reviews",
        price: "₹1299",
        save: "You Save: ₹1691 (57%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_300x.png?v=1648108782",
        prodName: "boAt Watch Wave Lite",
        review: "4.8 | 31 reviews",
        price: "₹1799",
        save: "You Save: ₹5191 (74%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_300x.png?v=1657869596",
        prodName: "boAt Airdopes 141",
        review: "4.8 | 411 reviews",
        price: "₹1799",
        save: "You Save: ₹2991 (67%)",
    },
    //     {
    //         img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MG_600x.png?v=1657775492",
    //         prodName: "boAt Airdopes 131 PRO",
    //         review: "5.0 | 2 reviews",
    //         price: "₹1299",
    //         save: "You Save: ₹1691 (57%)",
    //     },
    //     {
    //         img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
    //         prodName: "boAt Airdopes 131 - Wireless Earbuds",
    //         review: "4.8 | 1116 reviews",
    //         price: "₹1299",
    //         save: "You Save: ₹1691 (57%)",
    //     },
    //     {
    //         img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_300x.png?v=1648108782",
    //         prodName: "boAt Watch Wave Lite",
    //         review: "4.8 | 31 reviews",
    //         price: "₹1799",
    //         save: "You Save: ₹5191 (74%)",
    //     },
    //     {
    //         img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_300x.png?v=1657869596",
    //         prodName: "boAt Airdopes 141",
    //         review: "4.8 | 411 reviews",
    //         price: "₹1799",
    //         save: "You Save: ₹2991 (67%)",
    //     },
]

window.addEventListener("load", function () {
    displayData(best_sellers);
});


function displayData(best_sellers) {
    document.getElementById("best-sellers").innerHTML = "";

    best_sellers.map(function (elem, index) {

        let div = document.createElement("div");
        let Image = document.createElement("img");
        Image.setAttribute("src", elem.img);
        let div1 = document.createElement("div");
        let Name = document.createElement("h4");
        Name.innerText = elem.prodName;
        Name.style.color = "black";
        let Review = document.createElement("p");
        Review.style.color = "teal";
        Review.innerText = elem.review;
        let Hr = document.createElement("hr");
        Hr.style.color = "teal";
        let Price = document.createElement("h4");
        Price.innerText = elem.price;
        Price.style.color = "red";
        let Save = document.createElement("p");
        Save.innerText = elem.save;
        Save.style.color = "teal";
        Save.style.fontSize = "12px";
        let Btn = document.createElement("button");
        Btn.addEventListener("click", function () {
            addToCart(elem, index)
        });
        Btn.innerText = "Add to cart";
        Btn.style.backgroundColor = "red";
        Btn.style.color = "white";

        div1.append(Name, Review, Hr, Price, Save, Btn);

        div.append(Image, div1);

        document.querySelector("#best-sellers").append(div);
    });
}
/*-------------------------------------------------Deals of The Day----------------------------------------------------*/