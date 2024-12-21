 /**
    * @Event 方法
    * @description: 获取日期差值
    * @demo: calculateTimeDifference('2021-04-21');
    * @author: mhf
    * @time: 2024-12-21 16:10:29
    **/
export function calculateTimeDifference(dateString) {
    const startDate = new Date(dateString);
    const today = new Date();
    const timeDifference = today - startDate;

    const millisecondsPerYear = 365 * 24 * 60 * 60 * 1000;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    const years = Math.floor(timeDifference / millisecondsPerYear);
    const remainingMilliseconds = timeDifference % millisecondsPerYear;
    const days = Math.floor(remainingMilliseconds / millisecondsPerDay);

    return `${years}年${days}天`;
}

