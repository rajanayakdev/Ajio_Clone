
onLoad();

function onLoad(){
    displayHomePageItems_1();
    displayHomePageItems_2();
}

function displayHomePageItems_1() {
     let displayHomePageContainerItem_1 = document.querySelector('.category_items_1');
     let homePageInnerHTMLForCategory_1 = '';

     category_items_1.forEach(element => {
        homePageInnerHTMLForCategory_1 += `
        <div class="div_sale_item_1">
        <a href="${element.hyperLink}"><img class="sale_item_1" src="category/${element.image}"></a>
        </div>
        `
     });

     displayHomePageContainerItem_1.innerHTML = homePageInnerHTMLForCategory_1;

};

function displayHomePageItems_2() {
    let displayHomePageContainerItem_2 = document.querySelector('.category_items_2');
    let homePageInnerHTMLForCategory_2 = '';

    category_items_2.forEach(element => {
       homePageInnerHTMLForCategory_2 += `
       <a href="${element.hyperLink}"><img class="sale_item_2" src="offers/${element.image}"></a>
       `
    });

    displayHomePageContainerItem_2.innerHTML = homePageInnerHTMLForCategory_2;

};