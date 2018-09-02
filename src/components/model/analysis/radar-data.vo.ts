import { TableDetailVO } from './table-detail.vo';

export class RadarDataVO {
    header: Array<String> = [];
    detail: Array<TableDetailVO> = [];

    constructor(header: Array<String>, detail: Array<TableDetailVO>) {
        this.header = header;
        this.detail = detail;
    }
}