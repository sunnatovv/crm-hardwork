import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { StuffModule } from "../stuff/stuff.module";
// import { AuthResolver } from "./auth.resolver";

@Module({
  imports: [forwardRef(() => StuffModule),
    JwtModule.register({
      // global: true,
      secret: "SecretKey",
      signOptions: { expiresIn: "1h" },
    }),
  ],
  controllers: [AuthController],
  // providers: [AuthService, AuthResolver],
  providers: [AuthService],
  exports: [JwtModule, AuthService]
})
export class AuthModule {}
