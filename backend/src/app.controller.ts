import { Controller, Get } from '@nestjs/common';
import { Public } from './auth/guard/skipauth.guard';

@Controller()
export class AppController {
@Public()
  @Get("health")
  root() {
    return { ok: true, name: 'API', version: '1.0.0' };
  }
}
