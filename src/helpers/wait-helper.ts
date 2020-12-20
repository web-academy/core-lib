export class WaitHelper {
    public static async wait(ms: number) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
}
