String.prototype.truncate = function (num: number) {
  if (this.length > num) {
    return (this.slice(0, num) + "...") as string;
  } else {
    return this as string;
  }
};

String.prototype.prettyMoney = function (hideSymbol?: boolean) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  return formatter.format(Number(this));
};

Array.prototype.has = function (item) {
  if (!isEqualNoop) throw new Error("Missing isEqualKey!");
  return this.some((currentItem) => isEqualNoop(item, currentItem));
};

const isEqualNoop = (a: any, b: any) => {
  return a?.id === b?.id;
};

export { isEqualNoop as isEqual };