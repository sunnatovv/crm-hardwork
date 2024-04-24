import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { StuffService } from "../stuff/stuff.service";
import { CreateStuffDto } from "../stuff/dto/create-stuff.dto";
import { Stuff } from "../stuff/entities/stuff.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly stuffService: StuffService,
    private readonly jwtService: JwtService
  ) {}

  async singUp(createStuffDto: CreateStuffDto) {
    const condidate = await this.stuffService.getStuffByLogin(
      createStuffDto.login
    );
    if (condidate) {
      throw new HttpException(
        "This stuff already exist",
        HttpStatus.BAD_REQUEST
      );
    }

    const hashedPassword = await bcrypt.hash(createStuffDto.password, 7);
    createStuffDto.password = hashedPassword;

    const newStuff = await this.stuffService.create(createStuffDto);
    return this.genarateToken(newStuff);
  }

  private async genarateToken(stuff: Stuff) {
    const payload = { sub: stuff.id, login: stuff.login, roles: stuff.roles };

    return { token: this.jwtService.sign(payload) };
  }

  async login(loginDto: LoginDto) {
    const stuff = await this.stuffService.getStuffByLogin(loginDto.login);
    if (!stuff) {
      throw new UnauthorizedException("wrong login or passowrd");
    }

    const validPassword = await bcrypt.compare(
      loginDto.password,
      stuff.password
    );

    if (!validPassword) {
      throw new UnauthorizedException("wrong login or password");
    }
    return this.genarateToken(stuff);
  }
}
