
export class JsonUtils {

    static parse(target: any): any {
        return JSON.parse(JSON.stringify(target));
    }
}