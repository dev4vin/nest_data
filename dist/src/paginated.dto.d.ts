import { Model } from './entity.model';
/**
 *
 *
 * @export
 * @class InfoType
 */
export declare class InfoType {
    /**
     * filter object
     *
     * @type {*}
     * @memberof InfoType
     */
    filter?: any;
}
/**
 *
 *
 * @export
 * @class PaginateDto
 * @extends {InfoType}
 */
export declare class PaginateDto {
    /**
     *
     *
     * @type {number}
     * @memberof PaginateDto
     */
    limit?: number;
    /**
     *
     *
     * @type {number}
     * @memberof PaginateDto
     */
    offset?: number;
    /**
     *
     *
     * @type {*}
     * @memberof PaginateDto
     */
    sort?: any;
    /**
     * filter object
     *
     * @type {*}
     * @memberof InfoType
     */
    filter?: any;
}
/**
 *
 *
 * @export
 * @class PaginatedEntity
 * @template T
 */
export declare abstract class PaginatedEntity<T extends Model> {
    /**
    *
    *
    * @type {number}
    * @memberof PaginatedEntity
    */
    count: number;
    /**
     *
     *
     * @type {T[]}
     * @memberof PaginatedEntity
     */
    data: T[];
}
