import { Controller, Get, Logger, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { Console } from 'nestjs-console';
import { GoogleOauthGuard } from './google-oauth.guard';
import { JwtAuthService } from '../jwt/jwt-auth.service';
import { SESSION_COOKIE_KEY } from '../config/constants';
import { User } from 'src/common/user.types';

@Controller('google')
export class GoogleOauthController {
  constructor(private readonly jwtAuthService: JwtAuthService) {}

  @Get()
  @UseGuards(GoogleOauthGuard)
  async googleAuth(@Req() _req) {
    // Guard redirects
  }

  @Get('redirect')
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const { accessToken } = this.jwtAuthService.login(req.user);
    res.cookie(SESSION_COOKIE_KEY, accessToken, {
      httpOnly: true,
      sameSite: 'lax',
    });
    return res.redirect('/profile');
  }
}
