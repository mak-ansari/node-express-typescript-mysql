import { commanPaginationQuerySchema, commanPaginationSchema } from './../config/schema/pagination';

/**
 * Function to generate Default query params
 * @param queryParam : Request query param
 * @returns commanPaginationSchema
 */
export function getPaginationOptions(queryParam: any): commanPaginationSchema {

    const param: commanPaginationQuerySchema = {
        page: queryParam.page ? Number(queryParam.page) : 1,
        limit: queryParam.limit ? Number(queryParam.limit) : 10,
        sortBy: queryParam.sortBy ? String(queryParam.sortBy) : "created",
        sortOrder: queryParam.sortOrder ? String(queryParam.sortOrder) : "ASC",
        searchKeyword: queryParam.searchKeyword ? String(queryParam.searchKeyword) : "",
    }

    let paginationOptions: commanPaginationSchema = {
        "limit": param.limit,
        "offset": ((param.page - 1) * param.limit),
        "page": param.page,
        "sortBy": param.sortBy,
        "sortOrder": param.sortOrder,
        "searchKeyword": param.searchKeyword
    }

    return paginationOptions;
}