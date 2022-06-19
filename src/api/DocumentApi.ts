import http from "./HttpClient";
import IDocument from "./model/Document";

class DocumentApi {
    search(query: String, page?: number, size?: number) {
        return http.get<Array<IDocument>>(`/document/search?q=${query}` + page?`&p=${page}&s=${size}`:``);
    }

}
export default new DocumentApi();
