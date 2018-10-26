import {NgModule} from '@angular/core';
import {JwtModule} from '@auth0/angular-jwt';

export function jwtTokenGetter() {
    return sessionStorage.getItem('token');
}

@NgModule({
    imports: [
        JwtModule.forRoot({
            config: {
                tokenGetter: jwtTokenGetter,
                whitelistedDomains: ['localhost:3000'],
            }
        }),
    ]
})
export class AuthModule {}
