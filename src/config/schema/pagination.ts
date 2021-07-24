export class commanPaginationQuerySchema {
    page?: number
    limit?: number
    sortBy?: string
    sortOrder?: string
    searchKeyword?: string
}

export class commanPaginationSchema {
    limit?: number
    offset?: number
    page?: number
    sortBy?: string
    sortOrder?: string
    searchKeyword?: string
}

export class commanPaginationResponseSchema extends commanPaginationSchema {
    resultData: any[] | [] | null
    totalCount: number
}