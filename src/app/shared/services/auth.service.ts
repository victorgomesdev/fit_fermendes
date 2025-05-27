import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    setToken(sessionToken: string): void {
        localStorage.setItem('FT_TOKEN', sessionToken)
    }

    getToken() {
        const token = localStorage.getItem('FT_TOKEN')

        if (!token) {
            return null
        }

        return token
    }

    endSession() {
        localStorage.clear()
    }
}