import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import { Model } from 'objection';

@Module({
  imports: [
    ObjectionModule.register({
      Model: Model,
      config: {},
    }),
  ],
})
export class UserModule {}
