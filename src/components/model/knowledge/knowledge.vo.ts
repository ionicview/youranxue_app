export class Knowledge {
    /** 名称 */
    name: string;
    /** 所占比例决定页面表示大小 */
    value: number;
    /** 答题正确的件数 */
    okCnt: number;//扩展用
    /** 答题错误的件数 */
    ngCnt: number;
    /** 答题总件数 */
    totalCnt: number; // 后期版本升级使用ngCnt/totalCnt -> 决定颜色的深浅
    /** 超链接用 */
    path: string;
    /** 子节点 */
    children: Knowledge[];

}
