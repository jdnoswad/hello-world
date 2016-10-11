var supermarket = new Object();

supermarket.name = 'Red Wing Market';
supermarket.maxStock = 200;
supermarket.currentStock = 123;
supermarket.stockMissing = supermarket.maxStock - supermarket.currentStock;
supermarket.missingStock = function () {
    return ("you are missing " + this.stockMissing + "items.");
}

supermarket.restockMessage = function() {
    if (this.stockMissing < 0) {
        return "You are overstocked!";
    } else if (this.stockMissing == 0){
        return "you are fully stocked.";
    } else if (this.stockMissing < 50) {
        return "you do not have to restock any time soon.";
    } else if (this.stockMissing < 100) {
        return "you have a lot of goods.";
    } else if (this.stockMissing < 150) {
        return "consider restocking soon.";
    } else if (this.stockMissing < 200) {
        return "the store is nearly empty! Restock soon.";
    } else if (this.stockMissing == 200) {
        return "You are out of goods! Restock immediatly!";
    } else {
        return "You are out of goods and you owe customers! Restock immediatly!";
    }
};
var elStockQuantity = document.getElementById('stockQuantity');
elStockQuantity.textContent = supermarket.missingStock;

var elStockLevel = document.getElementById('stockLevel');
elStockLevel.textContent = supermarket.restockMessage();

var elStoreName = document.getElementById('storeName');
elStoreName.textContent = supermarket.name;
