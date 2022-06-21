import http from "./HttpClient";
import IDocument from "./model/Document";

class DocumentApi {
    search(query: String, page?: number, size?: number) {
        let path = "/document/search?q=" + query
        if(page){
            path = path + "&p="+ page + "&s=" + size
        }
        return http.get<Array<IDocument>>(path);
    }

}
export default new DocumentApi();
