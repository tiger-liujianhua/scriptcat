import { db } from "./model";

export function migrate() {
    // 数据库索引定义,建议每一次commit都要更新version
    db.version(1).stores({
        scripts: "++id,&uuid,name,namespace,author,origin_domain,type,status,createtime,updatetime,checktime",
    });
    db.version(2).stores({
        logger: "++id,level,origin,createtime",
        permission: "++id,[scriptId+permission+permissionValue],createtime,updatetime",
    });
    db.version(3).stores({
        logger: "++id,level,title,origin,createtime",
    });
    db.version(4).stores({
        value: "++id,scriptId,namespace,key,createtime",
    });
    db.version(5).stores({
        logger: "++id,level,origin,createtime,title,[origin+title],[level+origin+title]",
    });
    db.version(6).stores({
        scripts: "++id,&uuid,name,namespace,author,origin_domain,type,status,runStatus,createtime,updatetime,checktime",
    });
}
