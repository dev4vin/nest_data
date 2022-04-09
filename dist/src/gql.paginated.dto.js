"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paginated = exports.Status = void 0;
const graphql_1 = require("@nestjs/graphql");
/**
 * entity record status
 *
 * @export
 * @enum {number}
 */
var Status;
(function (Status) {
    /**
     * active state
     */
    Status["ACTIVE"] = "ACTIVE";
    /**
     * inactive state
     */
    Status["INACTIVE"] = "INACTIVE";
})(Status = exports.Status || (exports.Status = {}));
(0, graphql_1.registerEnumType)(Status, {
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
function Paginated(classRef) {
    /**
     *
     *
     * @class PaginatedType
     * @extends {PaginatedEntity<T>}
     */
    let PaginatedType = class PaginatedType {
        constructor() {
            this.count = 0;
            /**
             *
             *
             * @type {T[]}
             * @memberof PaginatedType
             */
            this.data = [];
        }
    };
    __decorate([
        (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true, description: 'records count' })
    ], PaginatedType.prototype, "count", void 0);
    __decorate([
        (0, graphql_1.Field)(() => [classRef], { nullable: true })
    ], PaginatedType.prototype, "data", void 0);
    PaginatedType = __decorate([
        (0, graphql_1.ObjectType)()
    ], PaginatedType);
    // @ts-ignore
    return PaginatedType;
}
exports.Paginated = Paginated;
//# sourceMappingURL=gql.paginated.dto.js.map