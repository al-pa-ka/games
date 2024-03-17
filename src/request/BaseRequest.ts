interface BaseRequest<RequestType extends BodyInit, ResponseType> {
    setHeaders(headers: Record<string, string>): void;
    fetch(requestData: RequestType, url: string, method: string): Promise<ResponseType>;
}

class BaseRequestImplementation<RequestType extends BodyInit>
    implements BaseRequest<RequestType, Response>
{
    BASE_HEADERS = { "Content-Type": "application/json" };
    headers = {};
    setHeaders(headers: Record<string, string>): void {
        this.headers = Object.assign(this.BASE_HEADERS, headers);
    }
    async fetch(requestData: RequestType, url: string, method: string): Promise<Response> {
        const response = await fetch(url, {
            method,
            body: requestData,
            headers: this.headers,
        });
        return response;
    }
}

class BaseDecorator<RequestType extends BodyInit, ResponseType>
    implements BaseRequest<RequestType, ResponseType> {
        requestObject;
        constructor(requestObject: BaseRequest<RequestType, ResponseType>){
            this.requestObject = requestObject
        }
        setHeaders(headers: Record<string, string>): void {
            this.requestObject.setHeaders(headers)
        }
        async fetch(requestData: RequestType, url: string, method: string): Promise<ResponseType> {
            return await this.requestObject.fetch(requestData, url, method)
        }
    }
