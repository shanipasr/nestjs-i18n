import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import {I18nJsonParser, I18nModule} from "nestjs-i18n";
import * as path from "path";

@Module({
  imports: [AuthenticationModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, "..",'i18n'),
      },
    }),

  ],
})
export class AppModule {}
