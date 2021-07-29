
import {Controller, UseGuards, Get, Post} from '@nestjs/common';
import {AuthenticationService} from "./authentication.service";
import {LocalAuthGuard} from "./local/local.auth.guards";

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly service: AuthenticationService) {
    }

 @UseGuards(LocalAuthGuard)
  @Get('login')
  public async login() {
    return true;
  }


}
