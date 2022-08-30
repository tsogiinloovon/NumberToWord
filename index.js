// numToWords :: (Number a, String a) => a -> String

const numberToWord = function (value) {
  if (value && isInteger(value)) {
    let sentence = makeBetter(numToWords(value).split(" "));
    return sentence.join(" ");
  }
  return value;
};

const isInteger = function (x) {
  return x % 1 === 0;
};

const makeBetter = function (y) {
  var x = y.filter((el) => {
    return el != "";
  });

  x.map((word, i) => {
    if ("нэг" === word && i > 0 && x.length - 1 - i > 3) {
      x[i] = "нэгэн";
    }
    if ("гурав" === word && i != x.length - 1) {
      x[i] = "гурван";
    }
    if ("дөрөв" === word && i != x.length - 1) {
      x[i] = "дөрвөн";
    }
    if ("тав" === word && i != x.length - 1) {
      x[i] = "таван";
    }
    if ("зургаа" === word && i != x.length - 1) {
      x[i] = "зургаан";
    }
    if ("долоо" === word && i != x.length - 1) {
      x[i] = "долоон";
    }
    if ("найм" === word && i != x.length - 1) {
      x[i] = "найман";
    }
    if ("ес" === word && i != x.length - 1) {
      x[i] = "есөн";
    }
    if ("арав" === word && i != x.length - 1) {
      x[i] = "арван";
    }
    if ("хорь" === word && i != x.length - 1) {
      x[i] = "хорин";
    }
    if ("гуч" === word && i != x.length - 1) {
      x[i] = "гучин";
    }
    if ("дөч" === word && i != x.length - 1) {
      x[i] = "дөчин";
    }
    if ("тавь" === word && i != x.length - 1) {
      x[i] = "тавин";
    }
    if ("жар" === word && i != x.length - 1) {
      x[i] = "жаран";
    }
    if ("дал" === word && i != x.length - 1) {
      x[i] = "далан";
    }
    if ("ная" === word && i != x.length - 1) {
      x[i] = "наяан";
    }
    if ("ер" === word && i != x.length - 1) {
      x[i] = "ерин";
    }
    if ("зуу" === word && i != x.length - 1) {
      x[i] = "зуун";
    }
    if ("зуун" === word && i == x.length - 1) {
      x[i] = "зуу";
    }
  });
  return x;
};

let numToWords = (n) => {
  const a = [
    "",
    "нэг",
    "хоёр",
    "гурав",
    "дөрөв",
    "тав",
    "зургаа",
    "долоо",
    "найм",
    "ес",
    "арав",
    "арван нэг",
    "арван хоёр",
    "арван гурав",
    "арван дөрөв",
    "арван тав",
    "арван зургаа",
    "арван долоо",
    "арван найм",
    "арван ес",
  ];
  const b = ["", "", "хорь", "гуч", "дөч", "тавь", "жар", "дал", "ная", "ер"];
  const g = [
    "",
    "мянга",
    "сая",
    "тэр бум",
    "наяд",
    "маш дэлгэмэл",
    "тунамал",
    "ингүүмэл",
    "хямралгүй",
    "ялгаруулагч",
  ];

  const arr = (x) => Array.from(x);
  const num = (x) => Number(x) || 0;
  const str = (x) => String(x);
  const isEmpty = (xs) => xs.length === 0;
  const take = (n) => (xs) => xs.slice(0, n);
  const drop = (n) => (xs) => xs.slice(n);
  const reverse = (xs) => xs.slice(0).reverse();
  const comp = (f) => (g) => (x) => f(g(x));
  const not = (x) => !x;
  const chunk = (n) => (xs) =>
    isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];

  // it might edit this again later to show how Monoids could fix this up
  let makeGroup = ([ones, tens, huns]) => {
    return [
      num(huns) === 0 ? "" : a[huns] + " зуу ",
      num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + " ") || "",
      a[tens + ones] || a[ones],
    ].join("");
  };
  // "thousands" constructor; no real good names for this, i guess
  let thousand = (group, i) => (group === "" ? group : `${group} ${g[i]}`);
  if (typeof n === "number") return numToWords(String(n));
  if (n === "0") return "тэг";
  return comp(chunk(3))(reverse)(arr(n))
    .map(makeGroup)
    .map(thousand)
    .filter(comp(not)(isEmpty))
    .reverse()
    .join(" ");
};

module.exports = numberToWord;
