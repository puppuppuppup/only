export const formatNumberToDoubleDigit = (num: number) => {
    const digits = num.toString().length;
    return digits > 1 ? num : `0${num}`;
};
