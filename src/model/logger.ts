import { db, Model } from '@App/model/model';

export type LOGGER_TYPE = 1 | 2;

export const LOGGER_TYPE_SYSTEM: LOGGER_TYPE = 1;
export const LOGGER_TYPE_SCRIPT: LOGGER_TYPE = 2;

export type LOGGER_LEVEL = 'debug' | 'info' | 'warn' | 'error';

export const LOGGER_LEVEL_DEBUG: LOGGER_LEVEL = 'debug';
export const LOGGER_LEVEL_INFO: LOGGER_LEVEL = 'info';
export const LOGGER_LEVEL_WARN: LOGGER_LEVEL = 'warn';
export const LOGGER_LEVEL_ERROR: LOGGER_LEVEL = 'error';

export interface Log {
    id: number
    level: LOGGER_LEVEL
    origin: string
    title: string
    message: string
    createtime: number
}

export class LoggerModel extends Model<Log> {

    public tableName: string = "logger";

    constructor() {
        super();
        this.table = db.table(this.tableName);
    }

}

