import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {

    }

    async login(credentials: {user: string, pass: string }): Promise<boolean> {
        try {
            const result = await this.http.post('http://localhost:8081/login', credentials).toPromise();
            if(result['token']) localStorage.setItem('token', result['token']);
            return !!result['token'];
        } catch (error) {
            console.log(error)
        }
    }

}