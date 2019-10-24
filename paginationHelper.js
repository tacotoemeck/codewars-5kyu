// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.items = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.items.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.itemCount() / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  let pageArray = [];
  let onPageCount = 0;
 console.log(pageIndex)
  for ( let i = 0; i < collection.length; i++) {
    onPageCount++;
    if ( onPageCount == this.itemsPerPage ) {
        pageArray.push(onPageCount);
        onPageCount= 0;
    } 
    else if ( i == collection.length -1) {
        pageArray.push(onPageCount)
    }
  }
  if ( pageIndex > pageArray.length) return -1;
  else return pageArray[pageIndex]
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (this.itemCount() === 0 || itemIndex < 0 || itemIndex > this.itemCount()) return -1;
if (itemIndex === 0 || itemIndex / this.itemsPerPage === 1) return 0;

return Math.floor((itemIndex / this.itemsPerPage)); 
}