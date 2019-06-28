import { Request } from 'express';
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql';

import { UpdateFullNameInput, User, UserService } from '.';
import { CurrentUser } from '../auth';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User)
  @Authorized()
  async currentUser(@Ctx('req') req: Request) {
    return this.userService.findUserByUk(req.session!.user.id);
  }

  @Mutation(returns => User)
  @Authorized()
  async updateFullName(
    @Arg('input') { fullName }: UpdateFullNameInput,
    @Ctx('req') req: Request,
    @CurrentUser() { id }: User,
  ): Promise<User> {
    const user = await this.userService.updateUser({
      data: { fullName },
      where: { id },
    });
    req.session!.user = user;
    return user;
  }
}
