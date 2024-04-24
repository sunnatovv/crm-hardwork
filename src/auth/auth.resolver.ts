// import { Args, Mutation, Resolver } from '@nestjs/graphql';
// import { AuthService } from './auth.service';
// import { LoginDto } from './dto/login.dto';
// import { CreateStuffDto } from '../stuff/dto/create-stuff.dto';
// import { Stuff } from '../stuff/entities/stuff.entity';

// @Resolver('Auth')
// export class AuthResolver {
//   constructor(private readonly authService: AuthService) {}

//   @Mutation(() => Stuff)
//   async signUp(@Args('createStuff') createStuffDto: CreateStuffDto) {
//     return this.authService.singUp(createStuffDto);
//   }

//   @Mutation(() => String)
//   async signIn(@Args('login') loginDto: LoginDto) {
//     return this.authService.login(loginDto);
//   }
// }
