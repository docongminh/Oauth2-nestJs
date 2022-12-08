import { Provider } from 'src/common/user.types';

export class CreateUserDto {
  provider: Provider;
  providerId: string;
  username: string;
  name: string;
}
