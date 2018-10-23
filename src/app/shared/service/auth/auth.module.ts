import {NgModule} from '@angular/core';
import {JwtModule} from '@auth0/angular-jwt';

@NgModule({
    imports: [
        JwtModule.forRoot({
            config: {
                tokenGetter: (() => sessionStorage.getItem('token')),
                whitelistedDomains: ['localhost:3000'],
            }
        }),
    ]
})
export class AuthModule {}
