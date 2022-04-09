import { Type } from '@dev4vin/commons';
/**
 * entity record status
 *
 * @export
 * @enum {number}
 */
export declare enum Status {
    /**
     * active state
     */
    ACTIVE = "ACTIVE",
    /**
     * inactive state
     */
    INACTIVE = "INACTIVE"
}
/**
 *
 *
 * @export
 * @template T
 * @param {T} classRef
 * @return {*}  {Type<PaginatedEntity<T>>}
 */
export declare function Paginated<T extends Type>(classRef: {
    new (): T;
}): {
    new (): {
        count: number;
        data: T[];
    };
};
