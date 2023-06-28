import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { UserModule } from './users/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TaskModule, 
    UserModule, 
    MongooseModule.forRoot(
    "mongodb+srv://adrian:1720588126@cluster0.qdtaxc1.mongodb.net/titulacion?retryWrites=true&w=majority"
    ),
  ],
  controllers: [],
  providers: [],
  
})
export class AppModule {}

