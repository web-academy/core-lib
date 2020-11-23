class ArrayHelper {


    public static chunk(array: any[], size: number): any[][] {
        const chunked_arr = [];
        for (let i = 0; i < array.length; i++) {
            const last = chunked_arr[chunked_arr.length - 1];
            if (!last || last.length === size) {
                chunked_arr.push([array[i]]);
            } else {
                last.push(array[i]);
            }
        }
        return chunked_arr;
    }

    public static median(arr: number[]) {
        const mid = Math.floor(arr.length / 2),
            nums = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
    }

    public static average(arr: number[]) {
        const sum = arr.reduce((previousValue, currentValue) => {
            if (!previousValue)
                previousValue = 0;
            return currentValue + previousValue;
        });
        return sum / arr.length;
    }

    public static mergeChunks(chunks: any[][]) {
        return chunks.reduce((previousValue, currentValue) => {
            if (!previousValue)
                previousValue= [];
            return previousValue.concat(currentValue);
        });
    }

}

export {ArrayHelper};
