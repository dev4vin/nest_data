import { Type } from '@nestjs/common';
/**
 *
 * @param model
 * @returns
 */
export declare const ApiPaginatedResponse: <TModel extends Type<any>>(model: TModel) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol | undefined, descriptor?: TypedPropertyDescriptor<Y> | undefined) => void;
/**
 *
 * @param model
 * @returns
 */
export declare const ApiModel200Response: <TModel extends Type<any>>(model: TModel) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol | undefined, descriptor?: TypedPropertyDescriptor<Y> | undefined) => void;
/**
 *
 * @param model
 * @param code
 * @returns
 */
export declare const ApiResponse: <TModel extends Record<string, any>>(model: TModel, code?: number) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol | undefined, descriptor?: TypedPropertyDescriptor<Y> | undefined) => void;
/**
 *
 * @param model
 * @returns
 */
export declare const Api404Response: <TModel extends Type<any>>(model: TModel) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol | undefined, descriptor?: TypedPropertyDescriptor<Y> | undefined) => void;
