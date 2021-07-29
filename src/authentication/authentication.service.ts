import { Injectable } from '@nestjs/common';
import {I18nRequestScopeService} from "nestjs-i18n";

@Injectable()
export class AuthenticationService {

constructor( private readonly i18n: I18nRequestScopeService) {
}


}
