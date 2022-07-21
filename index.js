let crauser_1 = [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gif--new_1200x.gif?v=1658249062",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/deal-of-the-day-new_1200x.png?v=1657957011",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A-131-Banner_0e6d2056-3bd5-4ee0-8bd3-7a2a50e30e30_1200x.jpg?v=1657953240",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wireless-banner_1_1200x.png?v=1657290971",
];

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
];

window.addEventListener("load", function () {
    display_best_sellers(best_sellers);
});

function display_best_sellers(data) {

    data.map(function (elem, index) {

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

let deals = [
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_300x.png?v=1656750183",
        prodName: "boAt BassHeads 100",
        review: "4.8 | 407 reviews",
        price: "₹379",
        save: "You Save: ₹620 (62%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_300x.png?v=1641801688",
        prodName: "boAt Rockerz 330",
        review: "4.8 | 258 reviews",
        price: "₹1499",
        save: "You Save: ₹1491 (50%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6b237ddc-f894-4dfd-a474-2435f93e6611_300x.png?v=1625046507",
        prodName: "boAt Rockerz 255",
        review: "4.8 | 224 reviews",
        price: "₹999",
        save: "You Save: ₹1991 (67%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_300x.png?v=1633152280",
        prodName: "boAt BassHeads 102",
        review: "4.8 | 154 reviews",
        price: "₹399",
        save: "You Save: ₹891 (69%)",
    },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_300x.png?v=1656750183" ,
    //     prodName: "boAt BassHeads 100",
    //     review: "4.8 | 407 reviews",
    //     price: "₹379",
    //     save:"You Save: ₹620 (62%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_300x.png?v=1641801688" ,
    //     prodName: "boAt Rockerz 330",
    //     review: "4.8 | 258 reviews",
    //     price: "₹1499",
    //     save:"You Save: ₹1491 (50%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6b237ddc-f894-4dfd-a474-2435f93e6611_300x.png?v=1625046507",
    //     prodName: "boAt Rockerz 255",
    //     review: "4.8 | 224 reviews",
    //     price: "₹999",
    //     save:"You Save: ₹1991 (67%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_300x.png?v=1633152280",
    //     prodName: "boAt BassHeads 102",
    //     review: "4.8 | 154 reviews",
    //     price: "₹399",
    //     save:"You Save: ₹891 (69%)",
    // },
];

window.addEventListener("load", function () {
    display_deals(deals);
});

function display_deals(data) {

    data.map(function (elem, index) {

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

        document.querySelector("#deals-of-the-day").append(div);
    });
}
/*-------------------------------------------------Smart Watches----------------------------------------------------*/
let smart_watches = [
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_300x.png?v=1650387008",
        prodName: "boAt Watch Xtend‌",
        review: "4.8 | 121 reviews",
        price: "₹3,499",
        save: "You Save: ₹4491 (56%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_eaf60560-3afb-4dda-b4c0-598078f7ce72_300x.png?v=1647767874",
        prodName: "boAt Watch Wave Pro",
        review: "5.0 | 10 reviews",
        price: "₹3,299",
        save: "You Save: ₹3691 (53%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_300x.png?v=1625046216",
        prodName: "boAt Storm",
        review: "4.8 | 929 reviews",
        price: "₹2,499",
        save: "You Save: ₹3491 (58%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_d8db0011-02f7-43d6-9fe7-7a71a9ed86d2_300x.png?v=1654312290",
        prodName: "boAt Wave Connect",
        review: "4.9 | 63 reviews",
        price: "₹3,999",
        save: "You Save: ₹2991 (43%)",
    },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_300x.png?v=1650387008" ,
    //     prodName: "boAt Watch Xtend‌",
    //     review: "4.8 | 121 reviews",
    //     price: "₹3,499",
    //     save:"You Save: ₹4491 (56%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_eaf60560-3afb-4dda-b4c0-598078f7ce72_300x.png?v=1647767874" ,
    //     prodName: "boAt Watch Wave Pro",
    //     review: "5.0 | 10 reviews",
    //     price: "₹3,299",
    //     save:"You Save: ₹3691 (53%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_300x.png?v=1625046216",
    //     prodName: "boAt Storm",
    //     review: "4.8 | 929 reviews",
    //     price: "₹2,499",
    //     save:"You Save: ₹3491 (58%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_d8db0011-02f7-43d6-9fe7-7a71a9ed86d2_300x.png?v=1654312290",
    //     prodName: "boAt Wave Connect",
    //     review: "4.9 | 63 reviews",
    //     price: "₹3,999",
    //     save:"You Save: ₹2991 (43%)",
    // },
];

window.addEventListener("load", function () {
    display_watches(smart_watches);
});

function display_watches(data) {

    data.map(function (elem, index) {

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

        document.querySelector("#smart-watches").append(div);
    });
}
/*-------------------------------------------------Trending Wireless----------------------------------------------------*/
let wireless = [
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_600x.png?v=1625045114",
        prodName: "boAt Rockerz 235 V2",
        review: "4.8 | 1036 reviews",
        price: "₹999",
        save: "You Save: ₹1991 (67%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_300x.png?v=1641801662",
        prodName: "boAt Rockerz 333",
        review: "4.9 | 146 reviews",
        price: "₹1,599",
        save: "You Save: ₹2391 (60%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_5_300x.png?v=1655787246",
        prodName: "boAt Rockerz 245 V2",
        review: "4.8 | 189 reviews",
        price: "₹1,199",
        save: "You Save: ₹1791 (60%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1be19528-6d06-4cab-8815-02618b93d3c9_300x.png?v=1625045854",
        prodName: "boAt Rockerz 255 Pro",
        review: "4.8 | 378 reviews",
        price: "₹1,399",
        save: "You Save: ₹3100 (60%)",
    },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_600x.png?v=1625045114" ,
    //     prodName: "boAt Rockerz 235 V2",
    //     review: "4.8 | 1036 reviews",
    //     price: "₹999",
    //     save:"You Save: ₹1991 (67%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_300x.png?v=1641801662" ,
    //     prodName: "boAt Rockerz 333",
    //     review: "4.9 | 146 reviews",
    //     price: "₹1,599",
    //     save:"You Save: ₹2391 (60%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_5_300x.png?v=1655787246",
    //     prodName: "boAt Rockerz 245 V2",
    //     review: "4.8 | 189 reviews",
    //     price: "₹1,199",
    //     save:"You Save: ₹1791 (60%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1be19528-6d06-4cab-8815-02618b93d3c9_300x.png?v=1625045854",
    //     prodName: "boAt Rockerz 255 Pro",
    //     review: "4.8 | 378 reviews",
    //     price: "₹1,399",
    //     save:"You Save: ₹3100 (60%)",
    // },
];

window.addEventListener("load", function () {
    display_wireless(wireless);
});

function display_wireless(data) {

    data.map(function (elem, index) {

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

        document.querySelector("#trending-wireless").append(div);
    });
}
/*-------------------------------------------------Top Earbuds----------------------------------------------------*/
let top_earbuds = [
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_300x.png?v=1642405569",
        prodName: "boAt Airdopes 131 - Wireless Earbuds",
        review: "4.8 | 1116 reviews",
        price: "₹1299",
        save: "You Save: ₹1691 (57%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_300x.png?v=1657869596",
        prodName: "boAt Airdopes 141",
        review: "4.8 | 411 reviews",
        price: "₹1,499",
        save: "You Save: ₹2991 (67%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_300x.png?v=1630059242",
        prodName: "boAt Airdopes 402 - Wireless Earbuds",
        review: "4.8 | 467 reviews",
        price: "₹1,999",
        save: "You Save: ₹3991 (67%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_300x.png?v=1612765376",
        prodName: "boAt Airdopes 121 v2",
        review: "4.8 | 466 reviews",
        price: "₹1,299",
        save: "You Save: ₹1700 (57%)",
    },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_300x.png?v=1642405569" ,
    //     prodName: "boAt Airdopes 131 - Wireless Earbuds",
    //     review: "4.8 | 1116 reviews",
    //     price: "₹1299",
    //     save:"You Save: ₹1691 (57%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_300x.png?v=1657869596" ,
    //     prodName: "boAt Airdopes 141",
    //     review: "4.8 | 411 reviews",
    //     price: "₹1,499",
    //     save:"You Save: ₹2991 (67%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_300x.png?v=1630059242",
    //     prodName: "boAt Airdopes 402 - Wireless Earbuds",
    //     review: "4.8 | 467 reviews",
    //     price: "₹1,999",
    //     save:"You Save: ₹3991 (67%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_300x.png?v=1612765376",
    //     prodName: "boAt Airdopes 121 v2",
    //     review: "4.8 | 466 reviews",
    //     price: "₹1,299",
    //     save:"You Save: ₹1700 (57%)",
    // },
];

window.addEventListener("load", function () {
    display_earbuds(top_earbuds);
});

function display_earbuds(data) {

    data.map(function (elem, index) {

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

        document.querySelector("#top-earbuds").append(div);
    });
}

/*-------------------------------------------------New Launches----------------------------------------------------*/
let crauser_2 = [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/image-3.png?v=1657607507",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_6b2b235d-7fb0-45e1-b9ba-8890ec81b172.jpg?v=1657439033",
];

let leftBtn_2 = document.querySelector("#crauser-2>:nth-child(2)");
let rightBtn_2 = document.querySelector("#crauser-2>:nth-child(3)");
let crauser2 = document.querySelector("#crauser-2>img");

let imageState_2 = 0;
rightBtn_2.addEventListener("click", function () {

    imageState_2++;
    if (imageState_2 === crauser_2.length) {
        imageState_2 = 0;
    }
    crauser2.src = crauser_2[imageState_2];
});

leftBtn_2.addEventListener("click", function () {
    imageState_2--;
    if (imageState_2 < 0) {
        imageState_2 = crauser_2.length - 1;
    }
    crauser2.src = crauser_2[imageState_2];
});

/*-------------------------------------------------Trending Wired----------------------------------------------------*/
let trending_wired = [
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_300x.png?v=1574927262",
        prodName: "boAt BassHeads 103",
        review: "4.8 | 533 reviews",
        price: "₹299",
        save: "You Save: ₹991 (77%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/08119dcb-d777-44af-b556-3492e5b4b7f0_300x.png?v=1625046271",
        prodName: "boAt Bassheads 900",
        review: "4.8 | 160 reviews",
        price: "₹799",
        save: "You Save: ₹1691 (68%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_300x.png?v=1633152280",
        prodName: "boAt BassHeads 102",
        review: "4.8 | 154 reviews",
        price: "₹449",
        save: "You Save: ₹841 (65%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_300x.png?v=1625046386",
        review: "4.8 | 1356 reviews",
        price: "₹549",
        save: "You Save: ₹941 (63%)",
    },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_300x.png?v=1574927262" ,
    //     prodName: "boAt BassHeads 103",
    //     review: "4.8 | 533 reviews",
    //     price: "₹299",
    //     save:"You Save: ₹991 (77%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/08119dcb-d777-44af-b556-3492e5b4b7f0_300x.png?v=1625046271",
    //     prodName:"boAt Bassheads 900",
    //     review: "4.8 | 160 reviews",
    //     price: "₹799",
    //     save: "You Save: ₹1691 (68%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_300x.png?v=1633152280",
    //     prodName: "boAt BassHeads 102",
    //     review: "4.8 | 154 reviews",
    //     price: "₹449",
    //     save: "You Save: ₹841 (65%)",
    // },
    // {
    //     img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_300x.png?v=1625046386",
    //     review: "4.8 | 1356 reviews",
    //     price: "₹549",
    //     save: "You Save: ₹941 (63%)",
    // },
];

window.addEventListener("load", function () {
    display_wired(trending_wired);
});

function display_wired(data) {

    data.map(function (elem, index) {

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

        document.querySelector("#trending-wired").append(div);
    });
}
/*-----------------------------------------------Trending Headphones--------------------------------------------------*/
window.addEventListener("load", function () {
    trendFunc(trending_wired);
});

document.querySelector("#headphones>span:nth-child(1)").addEventListener("click", wirelessFunc);
document.querySelector("#headphones>span:nth-child(2)").addEventListener("click", ancFunc);
document.querySelector("#headphones>span:nth-child(3)").addEventListener("click", wiredFunc);

let text_1 = document.querySelector("#headphones>span:nth-child(1)");
let text_2 = document.querySelector("#headphones>span:nth-child(2)");
let text_3 = document.querySelector("#headphones>span:nth-child(3)");

function wirelessFunc() {    
    text_1.style.color="red";    
    text_1.style.textDecoration="underline";
    text_2.style.color="teal";    
    text_2.style.textDecoration="none";
    text_3.style.color="teal";    
    text_3.style.textDecoration="none";
    trendFunc(wireless);
}
function ancFunc() {    
    text_2.style.color="red";    
    text_2.style.textDecoration="underline";
    text_1.style.color="teal";    
    text_1.style.textDecoration="none";
    text_3.style.color="teal";    
    text_3.style.textDecoration="none";
    trendFunc(best_sellers);
}
function wiredFunc() {    
    text_3.style.color="red";    
    text_3.style.textDecoration="underline";
    text_1.style.color="teal";    
    text_1.style.textDecoration="none";
    text_2.style.color="teal";    
    text_2.style.textDecoration="none";
    trendFunc(trending_wired);
}

function trendFunc(trendData) {
    document.querySelector("#trending-headphones").innerHTML = null;
    trendData.map(function (elem, index) {

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

        document.querySelector("#trending-headphones").append(div);
    });
}
/*-------------------------------------------------Grooming----------------------------------------------------*/
let grooming=[
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/95535146-e50a-49fe-803e-18add07a0759_400x.png?v=1625045778" ,
        prodName: "Misfit T200",
        review: "4.8 | 39 reviews",
        price: "₹1649",
        save:"You Save: ₹2350 (59%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_400x.png?v=1630060654",
        prodName:"Misfit T50 Trimmer",
        review: "4.9 | 16 reviews",
        price: "₹989",
        save: "You Save: ₹1510 (60%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d1a8963d-822e-481e-a61e-ce27d5734c68_300x.png?v=1630646787",
        prodName: "Misfit T50 Lite",
        review: "4.5 | 4 reviews",
        price: "₹879",
        save: "You Save: ₹1120 (56%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_300x.png?v=1657869596",
        prodName: "Misfit T30 Trimmer",
        review: "4.8 | 5 reviews",
        price: "₹769",
        save: "You Save: ₹730 (49%)",
    }
];

window.addEventListener("load", function () {
    display_grooming(grooming);
});

function display_grooming(data) {

    data.map(function (elem, index) {

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

        document.querySelector("#grooming").append(div);
    });
}

/*----------------------------------------------boAt | Superheroes--------------------------------------------------*/
window.addEventListener("load", function () {
    heroFunc(trending_wired);
});
document.querySelector("#superheroes>span:nth-child(1)").addEventListener("click", DCFunc);
document.querySelector("#superheroes>span:nth-child(2)").addEventListener("click", marvelFunc);

let dc_1 = document.querySelector("#superheroes>span:nth-child(1)");
let mrvl_2 = document.querySelector("#superheroes>span:nth-child(2)");

function DCFunc() {    
    dc_1.style.color="red";    
    dc_1.style.textDecoration="underline";
    mrvl_2.style.color="teal";    
    mrvl_2.style.textDecoration="none";   
    heroFunc(trending_wired);
}
function marvelFunc() {    
    mrvl_2.style.color="red";    
    mrvl_2.style.textDecoration="underline";
    dc_1.style.color="teal";    
    dc_1.style.textDecoration="none";    
    heroFunc(top_earbuds);
}

function heroFunc(trendData) {
    document.querySelector("#boat-superheroes").innerHTML = null;
    trendData.map(function (elem, index) {

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

        document.querySelector("#boat-superheroes").append(div);
    });
}
/*-------------------------------------------------Home Audio----------------------------------------------------*/
let home_audio=[
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_03786e84-2bf4-4d79-acc7-adaf74b052f0_300x.png?v=1647671737" ,
        prodName: "boAt Aavante Bar 900",
        review: "5.0 | 3 reviews",
        price: "₹3199",
        save:"You Save: ₹2791 (59%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1160-2_b0b3aa4f-c695-4157-857c-1864c2ac947f_600x.png?v=1629091906",
        prodName:"boAt Aavante Bar 1150",
        review: "4.9 | 16 reviews",
        price: "₹4499",
        save: "You Save: ₹5491 (55%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1160-2_b0b3aa4f-c695-4157-857c-1864c2ac947f_600x.png?v=1629091906",
        prodName: "boAt Aavante Bar 1150",
        review: "4.7 | 19 reviews",
        price: "₹4499",
        save: "You Save: ₹5491 (55%)",
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ABAaupera-FI02_400x.png?v=1657437576",
        prodName: "boAt Aavante Bar Aaupera",
        review: "4.8 | 5 reviews",
        price: "₹9999",
        save: "You Save: ₹14991 (60%)",
    }
];

window.addEventListener("load", function () {
    display_home_audio(home_audio);
});

function display_home_audio(data) {

    data.map(function (elem, index) {

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

        document.querySelector("#home-audio").append(div);
    });
}
/*-------------------------------------------------boAt Blogs----------------------------------------------------*/


/*------------------------------------------What They Say About Us:-------------------------------------------------*/


/*------------------------------------------In The Press-------------------------------------------------*/


/*------------------------------------------Brand Promise-------------------------------------------------*/
