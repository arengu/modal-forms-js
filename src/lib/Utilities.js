class Utilities {

  static includes (collection, value) {
    // old browsers do not implement .includes()
    return collection.indexOf(value) !== -1;
  }

}

module.exports = Utilities;
