
declare interface ServerResponse {
    result?: any
    error?: number
}

declare interface ResultType {
    err: string,
    result: string
}

interface WalletTypes  {
    updated: number
    loading?: boolean
    userid: number
    currentPage: string
}
interface useStoreTypes extends WalletTypes {
    update(payload: { [key: string]: string | number | boolean | any })
    call(url: string, params?: any): Promise<ServerResponse | null>
}
