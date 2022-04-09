import { ApiProperty,  } from '@nestjs/swagger';
import { Field, Int, ArgsType, ObjectType, InputType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { Model } from './entity.model';
/**
 *
 */
enum SORT {
  ASC,
  DESC
}
/**
 *
 *
 * @export
 * @class InfoType
 */
@InputType({ isAbstract: true })
@ArgsType()
export class InfoType {
  /**
   * filter object
   *
   * @type {*}
   * @memberof InfoType
   */
  @ApiProperty({
    description: 'filter object',
    required: false,
    type:() => String
  })
  @Field(() => GraphQLJSON, {
    nullable: true,
    description: 'filter object',   
  })
  filter?: any;
}
/**
 *
 *
 * @export
 * @class PaginateDto
 * @extends {InfoType}
 */
@ArgsType()
@InputType('PaginatedDto')
export class PaginateDto {
  /**
   *
   *
   * @type {number}
   * @memberof PaginateDto
   */
  @ApiProperty({
    required: false,
    type: () => Number,
    description: 'the number of records to fetch'
  })
  @Field(() => Int, {
    nullable: true,
    description: 'the number of records to fetch'
  })
  limit?: number;
  /**
   *
   *
   * @type {number}
   * @memberof PaginateDto
   */
  @ApiProperty({
    required: false,
    type: () => Number,
    description: 'the index to start fetching from'
  })
  @Field(() => Int, {
    nullable: true,
    description: 'the index to start fetching from'
  })
  offset?: number;
  /**
   *
   *
   * @type {*}
   * @memberof PaginateDto
   */
  @ApiProperty({
    description: 'sort field',
    type: () => String,
    required: false
  })
  @Field(() => [String], { nullable: true, description: 'sort field' })
  sort?: any;

  /**
   * filter object
   *
   * @type {*}
   * @memberof InfoType
   */
  @ApiProperty({
    description: 'filter object',
    required: false,
    type:() => String
  })
  @Field(() => GraphQLJSON, {
    nullable: true,
    description: 'filter object'
  })
  filter?: any;
}
/**
 *
 *
 * @export
 * @class PaginatedEntity
 * @template T
 */
@ObjectType({ isAbstract: true })
export abstract class PaginatedEntity<T extends Model> {
   /**
   *
   *
   * @type {number}
   * @memberof PaginatedEntity
   */
  @ApiProperty({
    required: false,
    description: 'records count',
    type: () => Number,
  })
  @Field(() => Int, { nullable: true, description: 'records count' })
  // @ts-ignore
  count: number;
  /**
   *
   *
   * @type {T[]}
   * @memberof PaginatedEntity
   */
  @ApiProperty({
    description: 'records',
    required: false,
    type:() => Array
  })
  // @ts-ignore
  data: T[];
}
