import {NgModule} from '@angular/core';
import {JwtModule} from 'angular-jwt';

@NgModule({
    providers: [
        JwtModule.forRoot({
            config: {
                headerName: 'Authorisation',
                headerPrefix: 'Bearer',
                tokenName: 'token',
                tokenGetter: (() => sessionStorage.getItem('token')),
            }
        }),
    ]
})
export class AuthModule {}
