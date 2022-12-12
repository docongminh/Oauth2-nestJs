import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
config();

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly usersService: UsersService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: 'http://localhost:3000/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    const { id, name, emails } = profile;

    let user = await this.usersService.findOne({
      where: { provider: 'google', providerId: id },
    });
    if (!user) {
      user = await this.usersService.create({
        provider: 'google',
        providerId: id,
        name: name.givenName,
        username: emails[0].value,
      });
    }

    return user;
  }
}
