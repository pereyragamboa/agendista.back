module.exports = {
  /**
   * Compares an item ID with an external one.
   * @param item Item containing an ID.
   * @param itemId ID supplied.
   * @return {boolean} Whether the item has an ID equal to that provided.
   */
  compareIndex: function(item, itemId) {
    return item.id === Number.parseInt(itemId);
  }
};