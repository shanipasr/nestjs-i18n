import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import {LocalStrategy} from "./local/local.strategy";
import {PassportModule} from "@nestjs/passport";

@Module({
  imports: [PassportModule],
  providers: [AuthenticationService,LocalStrategy],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
