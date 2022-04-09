import { applyDecorators } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";

/**
 *
 * @param model
 * @returns
 */
 export const ApiBodyDto = <TModel extends Record<string, any>>(model: TModel) => {
    return applyDecorators(
      ApiBody({
        schema: {
          type: 'object',
          properties: model
        }
      })
    );
  };