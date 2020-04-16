// const countDown = Math.floor((new Date('2021-1-1 0:0:0:0') - new Date()) / (1000 * 60 * 60 * 24))
// console.log(countDown)
const countDown = (range = 'day') => {
  const nowDate = new Date();
  const currentYear = nowDate.getFullYear();
  const nextYear = new Date(currentYear + 1, 0, 1)
  // 第二位参数为月份0-11

  const rangeBase = {
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
    week: 1000 * 60 * 60 * 24 * 7,
    month: 1000 * 60 * 60 * 24 * 30
  }

  return Math.floor(
    (nextYear.valueOf() - nowDate.valueOf()) /
    (rangeBase[range])
  )
}
console.log(countDown('day'))