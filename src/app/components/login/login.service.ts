import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable()
export class LoginService {
    user;
    constructor(private http: HttpClient, private afAuth: AngularFireAuth, private router: Router) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(this.user));
            } else {
                localStorage.setItem('user', null);
            }
        })
    }

    async login(email: string, pass: string ): Promise<void> {
        const result = await this.afAuth.signInWithEmailAndPassword(email, pass)
        this.router.navigate(['main']);

    }

}