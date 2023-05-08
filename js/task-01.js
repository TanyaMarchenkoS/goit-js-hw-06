const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
    const titleCategories = item.firstElementChild;
    console.log(`Category: ${titleCategories.textContent}`);
    const itemList = item.lastElementChild.children;
    console.log(`Elements: ${itemList.length}`);
});