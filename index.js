const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Scooby");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Pinky");
}

function destructivelyRemoveLastCat(name) {
    return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}

function appendCat(name) {
  let newGoldCat = []
    newGoldCat = [...cats, Gloria];
  return newGoldCat
}

function prependCat(name) {
  let prependGoldCat = []
     prependGoldCat = [name, ...Bruno];
  return prependGoldCat
}

function removeLastCat() {
  let removeLastGoldCat = []
    removeLastGoldCat = cats.slice(1, 3);
  return removeLastGoldCat;
}

function removeFirstCat() {
  let removeFirstGoldCat = []
     removeFirstGoldCats = cats.slice(1);
    return removeFirstGoldCats;
  }
