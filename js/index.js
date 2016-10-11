var supermarket = new Object();

supermarket.name = 'Red Wing Market';
supermarket.maxStock = 200;
supermarket.currentStock = prompt("enter current stock");
supermarket.checkStock = function() {
    return "you have " + ((this.maxStock - this.currentStock) / 2) + " goods left in stock.";
};
supermarket.checkStockMessage = function() {
    if (this.checkStock() < 0) {
        return "You are overstocked!";
    } else if (this.checkStock() == 0){
        return "you are fully stocked.";
    } else if (this.checkStock() < 25) {
        return "you do not have to restock any time soon.";
    } else if (this.checkStock() < 50) {
        return "you have a lot of goods.";
    } else if (this.checkStock() < 75) {
        return "consider restocking soon.";
    } else if (this.checkStock() < 100) {
        return "the store is nearly empty! Restock soon.";
    } else if (this.checkStock() == 100) {
        return "You are out of goods! Restock immediatly!";
    } else {
        return "You are out of goods and you owe customers! Restock immediatly!";
    }
};
var elStockQuantity = document.getElementById('stockQuantity');
elStockQuantity.textContent = supermarket.checkStock();

var elStockLevel = document.getElementById('stockLevel');
elStockLevel.textContent = supermarket.checkStockMessage();
