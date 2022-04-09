"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedEntity = exports.PaginateDto = exports.InfoType = void 0;
const swagger_1 = require("@nestjs/swagger");
const graphql_1 = require("@nestjs/graphql");
const graphql_type_json_1 = __importDefault(require("graphql-type-json"));
/**
 *
 */
var SORT;
(function (SORT) {
    SORT[SORT["ASC"] = 0] = "ASC";
    SORT[SORT["DESC"] = 1] = "DESC";
})(SORT || (SORT = {}));
/**
 *
 *
 * @export
 * @class InfoType
 */
let InfoType = class InfoType {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'filter object',
        required: false,
        type: () => String
    }),
    (0, graphql_1.Field)(() => graphql_type_json_1.default, {
        nullable: true,
        description: 'filter object',
    })
], InfoType.prototype, "filter", void 0);
InfoType = __decorate([
    (0, graphql_1.InputType)({ isAbstract: true }),
    (0, graphql_1.ArgsType)()
], InfoType);
exports.InfoType = InfoType;
/**
 *
 *
 * @export
 * @class PaginateDto
 * @extends {InfoType}
 */
let PaginateDto = class PaginateDto {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => Number,
        description: 'the number of records to fetch'
    }),
    (0, graphql_1.Field)(() => graphql_1.Int, {
        nullable: true,
        description: 'the number of records to fetch'
    })
], PaginateDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: () => Number,
        description: 'the index to start fetching from'
    }),
    (0, graphql_1.Field)(() => graphql_1.Int, {
        nullable: true,
        description: 'the index to start fetching from'
    })
], PaginateDto.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'sort field',
        type: () => String,
        required: false
    }),
    (0, graphql_1.Field)(() => [String], { nullable: true, description: 'sort field' })
], PaginateDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'filter object',
        required: false,
        type: () => String
    }),
    (0, graphql_1.Field)(() => graphql_type_json_1.default, {
        nullable: true,
        description: 'filter object'
    })
], PaginateDto.prototype, "filter", void 0);
PaginateDto = __decorate([
    (0, graphql_1.ArgsType)(),
    (0, graphql_1.InputType)('PaginatedDto')
], PaginateDto);
exports.PaginateDto = PaginateDto;
/**
 *
 *
 * @export
 * @class PaginatedEntity
 * @template T
 */
let PaginatedEntity = class PaginatedEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'records count',
        type: () => Number,
    }),
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true, description: 'records count' })
], PaginatedEntity.prototype, "count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'records',
        required: false,
        type: () => Array
    })
], PaginatedEntity.prototype, "data", void 0);
PaginatedEntity = __decorate([
    (0, graphql_1.ObjectType)({ isAbstract: true })
], PaginatedEntity);
exports.PaginatedEntity = PaginatedEntity;
//# sourceMappingURL=paginated.dto.js.map