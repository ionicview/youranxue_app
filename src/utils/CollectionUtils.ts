
export class CollectionUtils {

    static isEmpty(target: Array<any>): boolean {

        if (!target) {
            return true;
        }

        if (0 < target.length) {
            return false;
        } else {
            return true;
        }
    }
}