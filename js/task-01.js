const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => {
    const titleCategories = item.querySelector('h2');
    console.log(`Category: ${titleCategories.textContent}`);
    const itemList = item.querySelectorAll('li');
    console.log(`Elements: ${itemList.length}`);
});
