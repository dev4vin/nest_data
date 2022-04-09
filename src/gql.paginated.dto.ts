import { Type } from '@dev4vin/commons';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

/**
 * entity record status
 *
 * @export
 * @enum {number}
 */
export enum Status {
  /**
   * active state
   */
  ACTIVE = 'ACTIVE',
  /**
   * inactive state
   */
  INACTIVE = 'INACTIVE'
}

registerEnumType(Status, {
  name: 'Status',
  description: 'The supported status types'
});

/**
 *
 *
 * @export
 * @template T
 * @param {T} classRef
 * @return {*}  {Type<PaginatedEntity<T>>}
 */
export function Paginated<T extends Type>(classRef: { new(): T }): { new(): { count: number, data: T[] } } {
  /**
   *
   *
   * @class PaginatedType
   * @extends {PaginatedEntity<T>}
   */
  @ObjectType()
  class PaginatedType {
    @Field(() => Int, { nullable: true, description: 'records count' })
    // @ts-ignore
    count: number;
    /**
     *
     *
     * @type {T[]}
     * @memberof PaginatedType
     */
    @Field(() => [classRef], { nullable: true })
    // @ts-ignore
    data: T[];
  }
  // @ts-ignore
  return PaginatedType;
}
