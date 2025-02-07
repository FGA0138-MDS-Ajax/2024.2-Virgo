import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/Create-user.dto';
import { UpdateUserDto } from './dto/Update-user.dto';
import { UserPayload } from 'src/auth/models/UserPayload';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const createUserDto: CreateUserDto = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'securepassword',
        role: 'AGRONOMO',
        crea: '123456',
      };
      const result = { id: '1', ...createUserDto };
      jest.spyOn(service, 'create').mockResolvedValue(result as any);

      expect(await controller.create('127.0.0.1', createUserDto)).toBe(result);
      expect(service.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = [{ id: '1', name: 'John Doe' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(result as any);

      expect(
        await controller.findAll('127.0.0.1', {} as UserPayload, 'AGRONOMO'),
      ).toBe(result);
      expect(service.findAll).toHaveBeenCalledWith('AGRONOMO');
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const result = { id: '1', name: 'John Doe' };
      jest.spyOn(service, 'findOne').mockResolvedValue(result as any);

      expect(await controller.findOne('127.0.0.1', '1')).toBe(result);
      expect(service.findOne).toHaveBeenCalledWith('1');
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const updateUserDto: UpdateUserDto = {
        name: 'John Doe Updated',
        currentPassword: 'oldpassword',
        newPassword: 'newpassword',
      };
      const result = { id: '1', ...updateUserDto };
      jest.spyOn(service, 'update').mockResolvedValue(result as any);

      expect(await controller.update('127.0.0.1', '1', updateUserDto)).toBe(
        result,
      );
      expect(service.update).toHaveBeenCalledWith('1', updateUserDto);
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {
      const result = { id: '1', name: 'John Doe' };
      jest.spyOn(service, 'remove').mockResolvedValue(result as any);

      expect(await controller.remove('127.0.0.1', '1')).toBe(result);
      expect(service.remove).toHaveBeenCalledWith('1');
    });
  });
});
