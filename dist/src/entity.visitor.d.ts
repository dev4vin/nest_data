import { Visitor } from "@dev4vin/commons";
import { BaseEntity } from "typeorm";
export declare class EntityVisitor<T extends BaseEntity> implements Visitor<T, T> {
    visit(t: T, _?: any): T;
}
