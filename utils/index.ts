/**
 * 获取最大距离没有重复元素的数组
 * @param arr 资源数组
 * @param n 需要取多少个元素
 * @returns 最大距离没有重复元素的数组
 */
export const largestDistanceNoRepeatArr = (
  arr: Array<any>,
  n: number
): Array<any> => {
  const arrLen = arr.length;
  if (arrLen >= n) {
    return arr;
  }
  const repeatCount = Math.floor(n / arrLen);
  const remainCount = n % arrLen;
  let leftPos = 0,
    rightPos = arrLen - 1;
  let isLeftPosLastMove = false;
  while (rightPos - leftPos + 1 > remainCount) {
    if (!isLeftPosLastMove) {
      leftPos++;
      isLeftPosLastMove = true;
    } else {
      rightPos--;
      isLeftPosLastMove = false;
    }
  }
  const suppleArr = arr.slice(leftPos, rightPos + 1);
  const res = [];
  for (let i = 0; i < repeatCount; ++i) {
    res.push(...arr);
  }
  res.push(...suppleArr);
  return res;
};
