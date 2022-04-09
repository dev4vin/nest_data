"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api404Response = exports.ApiResponse = exports.ApiModel200Response = exports.ApiPaginatedResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paginated_dto_1 = require("./paginated.dto");
/**
 *
 * @param model
 * @returns
 */
const ApiPaginatedResponse = (model) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOkResponse)({
        schema: {
            title: `PaginatedResponseOf${model.name}`,
            allOf: [
                // @ts-ignore
                { $ref: (0, swagger_1.getSchemaPath)(paginated_dto_1.PaginatedEntity) },
                {
                    properties: {
                        data: {
                            type: 'array',
                            $ref: (0, swagger_1.getSchemaPath)(model)
                        },
                        count: {
                            description: 'number of records',
                            type: 'number'
                        }
                    }
                }
            ]
        }
    }));
};
exports.ApiPaginatedResponse = ApiPaginatedResponse;
/**
 *
 * @param model
 * @returns
 */
const ApiModel200Response = (model) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOkResponse)({
        schema: {
            title: `200ResponseOf${model.name}`,
            properties: {
                fields: { $ref: (0, swagger_1.getSchemaPath)(model) }
            }
        }
    }));
};
exports.ApiModel200Response = ApiModel200Response;
/**
 *
 * @param model
 * @param code
 * @returns
 */
const ApiResponse = (model, code = 200) => {
    let decorator;
    switch (code) {
        case 201: {
            decorator = (0, swagger_1.ApiCreatedResponse)({
                schema: {
                    title: `200Response`,
                    properties: model
                }
            });
            break;
        }
        default: {
            decorator = (0, swagger_1.ApiOkResponse)({
                schema: {
                    title: `200Response`,
                    properties: model
                }
            });
        }
    }
    return (0, common_1.applyDecorators)(decorator);
};
exports.ApiResponse = ApiResponse;
/**
 *
 * @param model
 * @returns
 */
const Api404Response = (model) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiNotFoundResponse)({
        schema: {
            title: `404ResponseOf${model.name}`,
            properties: {
                statusCode: {
                    default: 404
                },
                message: {
                    default: `${model.name} not found`
                }
            }
        }
    }));
};
exports.Api404Response = Api404Response;
//# sourceMappingURL=api.paginated.dto.js.map